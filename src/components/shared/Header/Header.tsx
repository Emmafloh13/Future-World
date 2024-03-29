import Link from "next/link"

export const Header = () =>{
    return (
        <header>
          <nav>
            <ul>
            <Link href="/" className="link">
              <li>Home</li>
              </Link>
              <Link href="/store" className="link">
                <li>Store</li>
                </Link>
                <Link href="/test" className="link">
                <li>Test</li>
                </Link>
            </ul>
          </nav>
        </header>
    )
}