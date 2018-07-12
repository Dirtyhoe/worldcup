import React, { Component } from 'react';

class NewsContent extends Component {
    render() {
        return (
            <div>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default NewsContent;