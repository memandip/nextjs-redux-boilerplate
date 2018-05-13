import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
    <React.Fragment>
        <Head>
            <link rel="stylesheet" href="/static/nprogress.css"/>
        </Head>
    </React.Fragment>
)