import Layout from "../layout/layout"
import {FairestForm} from "../components/form"

const Index = (props) => (
    <>
        <Layout title="Fairest Server">
            <h1 className="text-5xl font-bold text-center tracking-wide">fairest</h1>
            <FairestForm host={props.fairest_host}/>

        </Layout>
    </>
)

export async function getStaticProps(context) {
    return {
        props: {
            fairest_host: process.env.FAIREST_HOST
        }, // will be passed to the page component as props
    }
}


export default Index;
