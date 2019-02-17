import Link from 'next/link'
import React from 'react'

const links = [
    { href: 'https://github.com/segmentio/create-next-app', label: 'Github' },
].map((link: any) => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})

const Nav = () => (
    <nav>
        <ul>
            <ul>
                <li>
                    <Link prefetch href="/">
                        <a>Overlook</a>
                    </Link>
                </li>
                <li>
                    <Link prefetch href="/reviews">
                        <a>Company Reviews</a>
                    </Link>
                </li>
            </ul>

            <ul>
                <li key="about">
                    <Link prefetch href="/about">
                        <a>About</a>
                    </Link>
                </li>
                {links.map(({ key, href, label }) => (
                    <li key={key}>
                        <Link href={href}>
                            <a>{label}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </ul>

        <style jsx>{`
            :global(body) {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Avenir Next,
                    Avenir, Helvetica, sans-serif;
            }
            nav {
                text-align: center;
            }
            ul {
                display: flex;
                justify-content: space-between;
            }
            nav > ul {
                padding: 4px 16px;
            }
            li {
                display: flex;
                padding: 6px 8px;
            }
            a {
                color: #4c4c4c;
                text-decoration: none;
                font-size: 20px;
            }
        `}</style>
    </nav>
)

export default Nav
