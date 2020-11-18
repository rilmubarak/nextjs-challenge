import Navbar from '../components/Navbar';

export default () => {
    return (
        <>
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