import React from 'react'
import App from 'next/app'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import userReducer from '../src/store/reducers/index'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

const store = createStore(userReducer)
//can use this if you would like to use hooks in your _app
function MyComponent({ children }) {

    return <>
        {children}
    </>
}

class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }

    render() {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <Provider store={store}>
                    <MyComponent>
                        <Component {...pageProps} />
                    </MyComponent>
                </Provider>,
            </React.Fragment >)
    }
}

export default MyApp