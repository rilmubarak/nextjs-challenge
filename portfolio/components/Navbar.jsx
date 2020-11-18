import Link from 'next/link';

export default () => {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link href="/"><a className="logo">Baril.</a></Link>

                    <ul className="nav-links">
                        <li><Link href="/"><a className="nav-item 
                        active">Home</a></Link></li>
                        <li><Link href="/about"><a className="nav-item">About</a></Link></li>
                        <li><Link href="/portfolio"><a className="nav-item">Portfolio</a></Link></li>
                        <li><Link href="/contact"><a className="nav-item">Contact</a></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}