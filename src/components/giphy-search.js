import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { giphySearch, updateHistory, giphyTrending } from '../actions/index';

class GiphySearch extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.props.giphyTrending();
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.giphySearch(this.state.term);
        this.props.updateHistory(this.state.term);
        this.setState({ term: '' });
    }

    renderImages() {
        return this.props.images.map((image) => {
            return (
                <li key={image.embed_url} style={{width: '25%', boxShadow: '0 0 4px rgba(0,0,0,.5)'}}><img src={`http://media.giphy.com/media/${image.id}/giphy.gif`} style={{maxWidth: '100%'}}/></li>
            );
        })
    }

    render() {
        return (
            <div className="main-view" style={{}}>
                <form onSubmit={this.onFormSubmit}>
                    <input
                    value={this.state.term}
                    onChange={this.onInputChange}
                    placeholder="Search for a GIF or view trending GIFs below..."
                    type="text"
                    />
                </form>
                <ul className="images" style={{display: 'flex', flexWrap: 'wrap', listStyle: 'none', alignItems: 'center', padding: '0 5px', maxWidth: '1070px', margin: '10px auto'}}>
                    {this.renderImages()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        images: state.images
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ giphySearch, updateHistory, giphyTrending }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphySearch);