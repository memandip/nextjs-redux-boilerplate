import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper'
import store from '../store/store'
import {fetchNews} from "../actions/news";
import Layout from "../components/Layout";
import NewsList from '../components/partials/NewsList';

class Index extends React.Component {

    state = {
        datas:[]
    }

    getData = () => {
        this.props.dispatch(fetchNews());
    }

    render() {
        return (
            <Layout title={"Latest news"}>
                <h1>Latest news</h1>
                <button onClick={this.getData}>Fetch hacker news</button>
                <NewsList />
            </Layout>
        )
    }
}

export default withRedux(store)(Index)
