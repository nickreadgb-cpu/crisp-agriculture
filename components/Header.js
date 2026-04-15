import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <img src="/logo.png" alt="Crisp Agriculture logo" />
          <span>Crisp Agriculture</span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a className="button" href="mailto:josh@crispag.org">Speak with Josh</a>
      </div>
    </header>
  );
}
