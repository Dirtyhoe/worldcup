import React, { Component } from 'react';

class NewsImage extends Component {
    render() {
        return (
            <img width="420x" height="315px" src={this.props.image} />
        );
    }
}

export default NewsImage;