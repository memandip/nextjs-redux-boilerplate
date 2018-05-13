import 'isomorphic-fetch';
import React from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper'
import store from '../store/store'
import {fetchNews} from "../actions/news";
import Layout from "../components/Layout";
import Loading from '../components/common/Loading';
import NewsList from '../components/partials/NewsList';

class Index extends React.Component {

    state = {
        datas:[]
    }

    static async getInitialProps(){
        const data = await fetch('https://api.hackerwebapp.com/news').then( data => data.json() );
        return { data }
    }

    getData = () => {
        this.props.dispatch(fetchNews());
    }

    render() {
        console.log('props', this.props);
        return (
            <React.Fragment>
                <Loading />
                <Layout title={"Latest news"}>
                    <div className="news">
                        <h1>FROM SERVER</h1>
                        { this.props.data && this.props.data.slice(0,15).map( d => (
                            <div key={d.id}>
                                <h2><a href={ d.url }>{ d.title }</a></h2>
                                <p><Link href={ `/story?id=${d.id}` }><a>
                                    { d.comments_count } comments
                                </a></Link></p>
                            </div>
                        ) ) }
                    </div>
                    <div className="news">
                        <h1>IN CLIENT SIDE (By dispatching redux action)</h1>
                        <button onClick={this.getData}>Fetch hacker news</button>
                        <NewsList />
                    </div>
                </Layout>
            </React.Fragment>
        )
    }
}

export default withRedux(store)(Index)
