import React, {Component} from "react";
import Button from "material-ui/Button";
import TextField from 'material-ui/TextField';
import './search-bar.css';

class SearchBar extends Component {
    onKeyDown = (event) => {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (event.key === 'Enter') {
            console.log(event);
            event.preventDefault();
            event.stopPropagation();
            SearchBar.buttonClicked();
        }
    }

    render() {
        return (
            <div className='search-bar' onKeyDown={this.onKeyDown}>
                <TextField autoFocus className='search-field' id="search-field" placeholder="Paper S2PaperId/DOI/arXivId in here."
                           margin="normal"/>
                <Button variant="raised" color='primary' size='small' onClick={SearchBar.buttonClicked}>Search</Button>
            </div>
        );
    }

    static buttonClicked() {
        window.location.href = '/result?paperId=' + encodeURIComponent(document.getElementById('search-field').value);
    }
}

export default SearchBar;