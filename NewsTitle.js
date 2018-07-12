import React, { Component } from 'react';

class NewsTitle extends Component {
    render() {
        return (
            <div>
                <span class="title-news">{this.props.displayName}</span>
            </div>
        );
    }
}

export default NewsTitle;