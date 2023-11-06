import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta
                        content="Cutting-Edge Digital Solutions | Techno Consulting Services"
                        name="Empowering Businesses for Digital Success"
                    />
                    <meta
                        content="Empowering Businesses for Digital Success"
                        property="og:title"
                    />
                    <meta
                        content="Cutting-Edge Digital Solutions | Techno Consulting Services"
                        property="og:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/fb-og-image.png"
                        property="og:image"
                    />
                    <meta
                        property="og:url"
                        content="https://technoconsulting.in"
                    />
                    <meta
                        property="og:site_name"
                        content="Techno Consulting Services"
                    />
                    <meta
                        content="Empowering Businesses for Digital Success"
                        property="twitter:title"
                    />
                    <meta
                        content="Cutting-Edge Digital Solutions | Techno Consulting Services"
                        property="twitter:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/twitter-card.png"
                        property="twitter:image"
                    />
                    <meta property="og:type" content="Article" />
                    <meta content="summary" name="twitter:card" />
                    <meta name="twitter:site" content="@technoconsult" />
                    <meta name="twitter:creator" content="@technoconsult" />
                    <meta property="fb:admins" content="" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="theme-color" content="#000000" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body className="app">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
