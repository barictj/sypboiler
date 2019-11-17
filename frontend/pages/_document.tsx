// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href='../static/syp.png'></link>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=ABeeZee"></link>
                </Head>
                <body>



                    <Main />

                    <NextScript />


                </body>
            </Html>
        )
    }
}

export default MyDocument