import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { giphySearch } from '../actions/index';
import _ from "lodash";

class GiphyHistory extends Component {
    constructor(props) {
        super(props);

        this.searchHistory = this.searchHistory.bind(this);
    }

    searchHistory(event) {
        this.props.giphySearch(event.target.getAttribute('data-search'));
        this.setState({ term: '' });
    }

    renderList() {
        return this.props.history.map((item, index) => {
                return (
                    <li key={index} data-search={item} onClick={this.searchHistory} style={{float: 'left', padding: '0 10px', display: 'inline-block', cursor: 'pointer'}}>{index + 1}: {item}</li>
                )
            }
        )
    }

    render() {
        return (
            <ul className="history" style={{margin: '0 auto', padding: '0', overflow: 'auto', maxWidth: '1070px'}}>
                <p style={{float: 'left', margin: '0', padding: '0 10px', display: 'inline-block'}}>Search History: </p>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        history: state.history
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ giphySearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphyHistory);