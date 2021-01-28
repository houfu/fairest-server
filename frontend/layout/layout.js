import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({
                                   children,
                                   title = 'Screenshot Landing Page'
                               }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>{title}</title>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <meta name="author" content=""/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
            </Head>
            <div className="gradient leading-relaxed tracking-wide flex flex-col">
                <Header/>
                {children}
                <Footer/>
            </div>
        </>
    )
}
