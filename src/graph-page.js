import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import qs from 'query-string';
import PaperGraph from './paper-graph';
import './App.css';


class GraphPage extends Component {
    constructor(props) {
        super(props);
        this.state = {paperId: qs.parse(this.props.location.search).paperId};
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Paper Flow
                        </Typography>
                    </Toolbar>
                </AppBar>
                <PaperGraph paperId={this.state.paperId}/>
            </div>
        );
    }
}

export default GraphPage;
export {GraphPage};
