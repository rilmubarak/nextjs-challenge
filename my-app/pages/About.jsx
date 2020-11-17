import Link from 'next/link';

export default () => {
    return (
        <>
            <nav style={{textAlign:"center"}}>
                <Link href='/'><a>Home</a></Link>
            </nav>
            <div style={{textAlign:"center"}}>
                <h2>Ini Halaman About</h2>
                <p>Disini kita belajar cara membuat profile personal ataupun portofolio pribadi.</p>
            </div>
        </>
    )
}