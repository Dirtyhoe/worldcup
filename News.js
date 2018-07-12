import React, { Component } from 'react';
import NewsImage from './NewsImage';
import NewsContent from './NewsContent';
import NewsTitle from './NewsTitle';

class News extends Component {
    render() {
        return (
            <div>
                <NewsImage image={this.props.image} />
                <NewsTitle
                    displayName={this.props.displayName}
                />
                <NewsContent content={this.props.content} />
            </div>
        );
    }
}

export default News;