import AppBar from '@material-ui/core/AppBar'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import React from 'react'

library.add(faEye)

const links = [
    { href: '/reviews', label: 'Company reviews' },
    { href: '/about', label: 'About' },
].map((link: any) => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})

const Nav = () => (
    <AppBar style={{ backgroundColor: '#4c4c4c' }}>
        <ul>
            <ul>
                <li>
                    <FontAwesomeIcon icon="eye" size="2x" />
                </li>
                <li>
                    <Link prefetch href="/">
                        <a>Overlook</a>
                    </Link>
                </li>
            </ul>

            <ul>
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
                padding-top: 65px;
            }
            ul {
                display: flex;
                justify-content: space-between;
                padding: 6px;
            }
            nav > ul {
                padding: 20px 16px;
            }
            li {
                display: flex;
                padding: 6px 12px;
            }
            a {
                color: #e9e9e9;
                text-decoration: none;
                font-size: 22px;
            }
        `}</style>
    </AppBar>
)

export default Nav
