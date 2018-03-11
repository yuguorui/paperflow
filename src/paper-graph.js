import React, {Component} from "react";
import Graph from "react-graph-vis";
import Loading from "react-loading-animation";


class PaperGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [], edges: []
        };
        this.papers = {};
    }

    componentDidMount() {
        this.fetchPaperGraph()
            .then(res => {
                this.setState(
                    {
                        nodes: res.nodes,
                        edges: res.edges,
                        options: {
                            layout: {
                                randomSeed: undefined,
                                improvedLayout: true,
                                hierarchical: {
                                    enabled: true,
                                    levelSeparation: 150,
                                    nodeSpacing: 300,
                                    treeSpacing: 300,
                                    blockShifting: true,
                                    edgeMinimization: true,
                                    parentCentralization: true,
                                    direction: 'UD',        // UD, DU, LR, RL
                                    sortMethod: 'directed'   // hubsize, directed
                                }
                            },
                            physics: false
                        }
                    }
                );
            }).catch(err => {
            this.setState({error: true});
        });

    }

    static
    async fetchPaper(id) {
        const url = 'http://api.semanticscholar.org/v1/paper/';
        return fetch(url + id).then(res => res.json());
    }

    static is_important_citation(p) {
        if (p.isInfluential)
            return true;
        else return false;
    }

    static is_important_reference(p) {
        if (p.isInfluential)
            return true;
        else return false;
    }

    async fetchPaperGraph(maxDepth = 2) {
        let nodes = [];
        let edges = [];
        let root = await PaperGraph.fetchPaper(this.props.paperId);
        root.depth = 0;
        this.papers[root.paperId] = root;
        nodes.push({id: root.paperId, label: root.title});

        // handle the citation chain.
        let citation_queue = [root];
        while (citation_queue.length) {
            let n = citation_queue.shift();
            if (n.depth === maxDepth) continue;
            for (let i = 0; i < n.citations.length; i++) {
                if (n.citations[i].paperId in this.papers) continue;
                if (PaperGraph.is_important_citation(n.citations[i])) {
                    let new_n = await
                        PaperGraph.fetchPaper(n.citations[i].paperId);
                    new_n.depth = n.depth + 1;

                    edges.push({from: n.paperId, to: new_n.paperId});
                    nodes.push({id: new_n.paperId, label: new_n.title});
                    this.papers[new_n.paperId] = new_n;
                    citation_queue.push(new_n);
                }
            }
        }

        // handle the reference chain.
        let reference_queue = [root];
        while (reference_queue.length) {
            let n = reference_queue.shift();
            if (n.depth === maxDepth) continue;
            for (let i = 0; i < n.references.length; i++) {
                if (n.references[i].paperId in this.papers) continue;
                if (PaperGraph.is_important_reference(n.references[i])) {
                    let new_n = await
                        PaperGraph.fetchPaper(n.references[i].paperId);
                    new_n.depth = n.depth + 1;

                    edges.push({to: n.paperId, from: new_n.paperId});
                    nodes.push({id: new_n.paperId, label: new_n.title});
                    this.papers[new_n.paperId] = new_n;
                    reference_queue.push(new_n);
                }
            }
        }
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].widthConstraint = {maximum: 200};
        }
        for (let i = 0; i < edges.length; i++) {
            edges[i].id = 'e' + i;
        }
        return {nodes: nodes, edges: edges};
    }

    render() {
        // return <Loading/>;
        const style = {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        };
        if (this.state.nodes.length === 0 && !this.state.error) {
            return <Loading style={style}/>;
        }
        else {
            if (!this.state.error) {
                let myGraph = {nodes: this.state.nodes, edges: this.state.edges};
                const graphStyle = {
                    height: '100vh'
                };
                return (
                    <Graph graph={myGraph} options={this.state.options} style={graphStyle}/>
                );
            }
            else {
                return (<h2 style={style}>Not Found!</h2>);
            }
        }
    }
}

export {PaperGraph};
export default PaperGraph;