import 'isomorphic-fetch';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import store from '../store/store'

class Story extends React.Component{

    static async getInitialProps({query}){
        const req = await fetch(`https://api.hackerwebapp.com/item/${query.id}`);
        const story = await req.json();
        return { story };
    }

    render(){
        return (
            <Layout title={this.props.story.title}>
                <h1>{this.props.story.title}</h1>
                {this.props.story.comments.map(d => (
                    <div className="comment" key={d.id}>
                        <div dangerouslySetInnerHTML={{__html:d.content}}></div>
                        <div>By {d.user}</div>
                    </div>
                ))}
            </Layout>
        );
    }

}

export default withRedux(store)(Story);