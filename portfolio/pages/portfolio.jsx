import Navbar from '../components/Navbar';
import Head from 'next/head';

export default () => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title-contact">My Poftfolio!</h1>
                        <p className="description-contact">Want to see my Portfolio ? click <a href="https://rilmubarak.com/#portfolio" target="_blank" style={{color:"blue"}}>here</a> 
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}