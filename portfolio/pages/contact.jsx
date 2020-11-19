import Navbar from '../components/Navbar';
import Head from 'next/head';

export default () => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            
            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title-contact">Contact Now!</h1>
                        <div className="description-contact">
                        <p>Feel free to contact me :) </p>
                        <span className="description-contact-2">Click <a href="https://rilmubarak.com/#contact" style={{color:"blue"}} target="_blank">here</a></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}