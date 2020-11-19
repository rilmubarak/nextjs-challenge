import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

export default () => {
    return (
      <>    
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper">
                        <h1 className="title">Hi, I'm Khairil Mubarak </h1>
                        <p className="description">Passionate about coding, I enjoy designing complex systems that are easy to use. Spending most of the time playing with scripts and codes also with Penetration testing.</p>

                        <Link href="/contact"><a className="cta">Contact Me</a></Link>
                    </div>
                    
                    <div className="ilustrator">
                        <img src="https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5db1e0ee47495f0c5a1904fd_coffee.gif"/>
                    </div>
                </div>
            </section>
      </>
    );
}