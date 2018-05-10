import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

class NewsList extends Component{

    render(){
        let { news } = this.props;
        return (
            <div>
                { news && news.news.map((story) => (
                    <div key={story.id}>
                        <h2><a href={ story.url }>{ story.title }</a></h2>
                        <p><Link href={ `/story?id=${story.id}` }><a>
                            { story.comments_count } comments
                        </a></Link></p>
                    </div>
                )) }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.news
    };
}

export default connect(mapStateToProps)(NewsList);