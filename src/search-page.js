import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Card, {CardContent} from 'material-ui/Card';
import SearchBar from "./search-bar";
import './App.css';


class SearchPage extends Component {

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
                <SearchBar/>
                <Card style={{
                    position: 'fixed',
                    top: '80%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <CardContent>
                        <h4>Examples:</h4>
                        <p>  S2PaperId: 044ef9a2b3f12a36cf4c01ff45b57fe6b414f2d9</p>
                        <p>  DOI: 10.1145/3133956.3134057</p>
                        <p>  arXivId: arXiv:1801.02610</p>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default SearchPage;
