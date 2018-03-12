import React, {Component} from "react";
import Graph from "react-graph-vis";
import Loading from "react-loading-animation";

const CCFList = ["TOCS",
    "TOC",
    "TPDS",
    "TCAD",
    "TOS",
    "TACO",
    "TAAS",
    "TODAES",
    "TECS",
    "TRETS",
    "TVLSI",
    "JPDC",
    "PARCO",
    "JSA",
    "DC",
    "FGCS",
    "Integration",
    "JGC",
    "TJSC",
    "JETC",
    "JET",
    "RTS",
    "ASPLOS",
    "FAST",
    "HPCA",
    "ISCA",
    "MICRO",
    "SC",
    "USENIX ATC",
    "PPoPP",
    "HOT CHIPS",
    "SPAA",
    "PODC",
    "CGO",
    "DAC",
    "DATE",
    "EuroSys",
    "HPDC",
    "ICCD",
    "ICCAD",
    "ICDCS",
    "HiPEAC",
    "SIGMETRICS",
    "ICPP",
    "ICS",
    "IPDPS",
    "FPGA",
    "Performance",
    "LISA",
    "MSST",
    "PACT",
    "RTAS",
    "VEE",
    "CODES+ISSS",
    "ITC",
    "SOCC",
    "CF",
    "NOCS",
    "ASP-DAC",
    "ASAP",
    "CLUSTER",
    "CCGRID",
    "Euro-Par",
    "ETS",
    "FPL",
    "FCCM",
    "GLSVLSI",
    "HPCC",
    "MASCOTS",
    "NPC",
    "ICA3PP",
    "CASES",
    "FPT",
    "HPC",
    "ICPADS",
    "ISCAS",
    "ISLPED",
    "ISPD",
    "Hot Interconnects",
    "VTS",
    "ISPA",
    "SYSTOR",
    "ATS",
    "TON",
    "JSAC",
    "TMC",
    "TOIT",
    "TOMCCAP",
    "TOSN",
    "CN",
    "TOC",
    "TWC",
    "CC",
    "TNSM",
    "JNCA",
    "MONET",
    "PPNA",
    "WCMC",
    "MOBICOM",
    "SIGCOMM",
    "INFOCOM",
    "SenSys",
    "CoNEXT",
    "SECON",
    "IPSN",
    "ICNP",
    "MobiHoc",
    "MobiSys",
    "IWQoS",
    "IMC",
    "NOSSDAV",
    "NSDI",
    "ANCS",
    "FORTE",
    "LCN",
    "Globecom",
    "ICC",
    "ICCCN",
    "MASS",
    "P2P",
    "IPCCC",
    "WoWMoM",
    "ISCC",
    "WCNC",
    "Networking",
    "IM",
    "MSWiM",
    "NOMS",
    "HotNets",
    "WASA",
    "TDSC",
    "TIFS",
    "TISSEC",
    "JCS",
    "CLSR",
    "IMCS",
    "ISTR",
    "IJISP",
    "IJICS",
    "SCN",
    "CCS",
    "CRYPTO",
    "EUROCRYPT",
    "S&P",
    "USENIX Security",
    "ACSAC",
    "ASIACRYPT",
    "ESORICS",
    "FSE",
    "NDSS",
    "CSFW",
    "RAID",
    "PKC",
    "DSN",
    "TCC",
    "SRDS",
    "CHES",
    "WiSec",
    "ACM MM&SEC",
    "SACMAT",
    "ASIACCS",
    "DRM",
    "ACNS",
    "ACISP",
    "DFRWS",
    "FC",
    "DIMVA",
    "SEC",
    "IFIP WG 11.9",
    "ISC",
    "ICICS",
    "SecureComm",
    "NSPW",
    "CT-RSA",
    "SOUPS",
    "HotSec",
    "SAC",
    "TrustCom",
    "PAM",
    "PETS",
    "TOPLAS",
    "TOSEM",
    "TSE",
    "ASE",
    "ESE",
    "TSC",
    "IETS",
    "IST",
    "JFP",
    "JSS",
    "RE",
    "SCP",
    "SoSyM",
    "SPE",
    "STVR",
    "CL",
    "IJSEKE",
    "STTT",
    "JLAP",
    "JWE",
    "SOCA",
    "SQJ",
    "TPLP",
    "FSE/ESEC",
    "OOPSLA",
    "ICSE",
    "OSDI",
    "PLDI",
    "POPL",
    "SOSP",
    "ASE",
    "ECOOP",
    "ETAPS",
    "FM",
    "ICPC",
    "RE",
    "CAiSE",
    "ICFP",
    "LCTES",
    "MoDELS",
    "CP",
    "ICSOC",
    "ICSME",
    "VMCAI",
    "ICWS",
    "SAS",
    "ISSRE",
    "ISSTA",
    "Middleware",
    "SANER",
    "HotOS",
    "ESEM",
    "PASTE",
    "APLAS",
    "APSEC",
    "COMPSAC",
    "ICECCS",
    "SCAM",
    "ICFEM",
    "TOOLS",
    "PEPM",
    "QRS",
    "SEKE",
    "ICSR",
    "ICWE",
    "SPIN",
    "LOPSTR",
    "TASE",
    "ICST",
    "ATVA",
    "ISPASS",
    "SCC",
    "ICSSP",
    "MSR",
    "REFSQ",
    "WICSA",
    "EASE",
    "TKDD",
    "AEI",
    "DKE",
    "DMKD",
    "EJIS",
    "IPM",
    "IS",
    "JASIST",
    "JWS",
    "KIS",
    "TWEB",
    "DPD",
    "I&M",
    "IPL",
    "IR",
    "IJCIS",
    "IJGIS",
    "IJIS",
    "IJKM",
    "IJSWIS",
    "JCIS",
    "JDM",
    "JGITM",
    "JIIS",
    "JSIS",
    "SIGMOD",
    "SIGKDD",
    "SIGIR",
    "VLDB",
    "ICDE",
    "CIKM",
    "PODS",
    "DASFAA",
    "ECML-PKDD",
    "ISWC",
    "ICDM",
    "ICDT",
    "EDBT",
    "CIDR",
    "SDM",
    "WSDM",
    "DEXA",
    "ECIR",
    "WebDB",
    "ER",
    "MDM",
    "SSDBM",
    "WAIM",
    "SSTD",
    "PAKDD",
    "APWeb",
    "WISE",
    "ESWC",
    "IANDC",
    "SICOMP",
    "TIT",
    "TALG",
    "TOCL",
    "TOMS",
    "Algorithmica",
    "CC",
    "FAC",
    "FMSD",
    "INFORMS",
    "JCSS",
    "JGO",
    "JSC",
    "MSCS",
    "TCS",
    "APAL",
    "ACTA",
    "DAM",
    "FUIN",
    "LISP",
    "IPL",
    "JCOMPLEXITY",
    "LOGCOM",
    "LMCS",
    "SIDMA",
    "STOC",
    "FOCS",
    "LICS",
    "CAV",
    "SoCG",
    "SODA",
    "CADE/IJCAR",
    "CCC",
    "ICALP",
    "CONCUR",
    "HSCC",
    "ESA",
    "CSL",
    "FSTTCS",
    "IPCO",
    "RTA",
    "ISAAC",
    "MFCS",
    "STACS",
    "FMCAD",
    "SAT",
    "ICTAC",
    "TOG",
    "TIP",
    "TVCG",
    "TOMCCAP",
    "CAD",
    "CAGD",
    "CGF",
    "GM",
    "TCSVT",
    "TMM",
    "JASA",
    "SIIMS",
    "Speech Com",
    "CAVW",
    "C&G",
    "CGTA",
    "DCG",
    "IET-IPR",
    "JVCIR",
    "MS",
    "MTA",
    "SPIC",
    "TVC",
    "ACM MM",
    "SIGGRAPH",
    "IEEE VIS",
    "VR",
    "ICMR",
    "i3D",
    "SCA",
    "DCC",
    "EG",
    "EuroVis",
    "SGP",
    "EGSR",
    "ICME",
    "PG",
    "SPM",
    "ICASSP",
    "CASA",
    "CGI",
    "ISMAR",
    "PacificVis",
    "ICIP",
    "MMM",
    "GMP",
    "PCM",
    "SMI",
    "INTERSPEECH",
    "AI",
    "TPAMI",
    "IJCV",
    "JMLR",
    "TAP",
    "TSLP",
    "CVIU",
    "DKE",
    "TAC",
    "TASLP",
    "TEC",
    "TFS",
    "TNNLS",
    "IJAR",
    "JAIR",
    "JSLHR",
    "AAMAS",
    "TALIP",
    "AIM",
    "DSS",
    "EAAI",
    "ESWA",
    "T-CIAIG",
    "IET-CVI",
    "IVC",
    "IDA",
    "IJCIA",
    "IJDAR",
    "IJIS",
    "IJNS",
    "IJPRAI",
    "JETAI",
    "KBS",
    "NLE",
    "NCA",
    "NPL",
    "PAA",
    "PRL",
    "WIAS",
    "AAAI",
    "CVPR",
    "ICCV",
    "ICML",
    "IJCAI",
    "NIPS",
    "ACL",
    "COLT",
    "EMNLP",
    "ECAI",
    "ECCV",
    "ICRA",
    "ICAPS",
    "ICCBR",
    "COLING",
    "KR",
    "UAI",
    "AAMAS",
    "PPSN",
    "ACCV",
    "CoNLL",
    "GECCO",
    "ICTAI",
    "ALT",
    "ICANN",
    "FGR",
    "ICDAR",
    "ILP",
    "KSEM",
    "ICONIP",
    "ICPR",
    "ICB",
    "IJCNN",
    "PRICAI",
    "NAACL",
    "BMVC",
    "IROS",
    "AISTATS",
    "ACML",
    "TOCHI",
    "IJHCS",
    "CSCW",
    "HCI",
    "IWC",
    "UMUAI",
    "IJHCI",
    "BIT",
    "PMC",
    "PUC",
    "CHI",
    "UbiComp",
    "CSCW",
    "IUI",
    "ITS",
    "UIST",
    "ECSCW",
    "MobileHCI",
    "PERCOM",
    "GROUP",
    "ASSETS",
    "DIS",
    "GI",
    "MobiQuitous",
    "INTERACT",
    "CoopIS",
    "ICMI",
    "IDC",
    "AVI",
    "UIC",
    "DIS",
    "CSCWD",
    "CollaborateCom",
    "Proc. IEEE",
    "JACM",
    "Cognition",
    "TMI",
    "TGARS",
    "TITS",
    "TR",
    "TASAE",
    "JCST",
    "JAMIA",
    "TITB",
    "TCBB",
    "FCS",
    "EMSOFT",
    "ISMB",
    "CogSci",
    "RECOMB",
    "BIBM",
    "AMIA",
    "APBC",
    "COSIT"
];


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
                            autoResize: true,
                            layout: {
                                randomSeed: undefined,
                                improvedLayout: true,
                                hierarchical: {
                                    enabled: true,
                                    levelSeparation: 300,
                                    nodeSpacing: 300,
                                    treeSpacing: 300,
                                    blockShifting: true,
                                    edgeMinimization: true,
                                    parentCentralization: true,
                                    direction: 'UD',        // UD, DU, LR, RL
                                    sortMethod: 'directed'   // hubsize, directed
                                }
                            },
                            physics: false,
                            edges: {
                                color: {
                                    color: '#507e9a',
                                    highlight: '#71b5ca',
                                    hover: '#71b5ca',
                                    inherit: false,
                                    opacity: 0.8
                                }
                            }
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

    static isInCCFList(s) {
        s = s.toLowerCase();
        for (let i = 0; i < CCFList.length; i++) {
            let ele = CCFList[i].toLowerCase();
            if (s.includes(ele)) {
                // console.log(s);
                return true;
            }
        }
        return false;
    }

    static async is_important_citation(p) {
        if (PaperGraph.isInCCFList(p.venue) || p.year === (new Date()).getFullYear()) {
            return true;
        }
        if (p.isInfluential) {
            if ((await this.fetchPaper(p.paperId)).citations.length >= 3)
                return true;
        }
        return false;
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
        nodes.push({id: root.paperId, label: root.title + ', <' + root.venue + '>', color: '#d54444'});

        // handle the citation chain.
        let citation_queue = [root];
        while (citation_queue.length) {
            let n = citation_queue.shift();
            let req_queue = [];
            if (n.depth === maxDepth) continue;
            for (let i = 0; i < n.citations.length; i++) {
                if (n.citations[i].paperId in this.papers) continue;

                if ((await PaperGraph.is_important_citation(n.citations[i])) === true) {
                    req_queue.push(PaperGraph.fetchPaper(n.citations[i].paperId));
                }
            }

            for (let i = 0; i < req_queue.length; i++) {
                let new_n = await req_queue[i];
                new_n.depth = n.depth + 1;
                edges.push({from: n.paperId, to: new_n.paperId});
                if (PaperGraph.isInCCFList(new_n.venue)) {
                    nodes.push({
                        id: new_n.paperId,
                        label: new_n.title + ', <' + new_n.venue + '>',
                        color: '#deb959'
                    });
                }
                else {
                    nodes.push({id: new_n.paperId, label: new_n.title + ', <' + new_n.venue + '>'});
                }
                this.papers[new_n.paperId] = new_n;
                citation_queue.push(new_n);
            }
        }

        // handle the reference chain.
        let reference_queue = [root];
        while (reference_queue.length) {
            let n = reference_queue.shift();
            let req_queue = [];
            if (n.depth === maxDepth) continue;
            for (let i = 0; i < n.references.length; i++) {
                if (n.references[i].paperId in this.papers) continue;

                if (await PaperGraph.is_important_reference(n.references[i])) {
                    req_queue.push(PaperGraph.fetchPaper(n.references[i].paperId));
                }
            }

            for (let i = 0; i < req_queue.length; i++) {
                let new_n = await req_queue[i];
                new_n.depth = n.depth + 1;

                edges.push({to: n.paperId, from: new_n.paperId});
                if (PaperGraph.isInCCFList(new_n.venue)) {
                    nodes.push({
                        id: new_n.paperId,
                        label: new_n.title + ', <' + new_n.venue + '>',
                        color: '#deb959'
                    });
                }
                else {
                    nodes.push({id: new_n.paperId, label: new_n.title + ', <' + new_n.venue + '>'});
                }
                this.papers[new_n.paperId] = new_n;
                reference_queue.push(new_n);
            }
        }
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].widthConstraint = {maximum: 200};
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