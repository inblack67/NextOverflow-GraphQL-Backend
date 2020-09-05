import Link from 'next/link'
import { server } from '../src/server'
import Router from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'

const guestLinks = <Fragment>
    <li>
        <Link href='/login'>
            <a>
                Login
        </a>
        </Link>
    </li>
    <li>
        <Link href='/register'>
            <a>
                Register
         </a>
        </Link>
    </li>
</Fragment>


const Navbar = () => {

    const authLinks = <Fragment>
        <li>
            <Link href='/add-story'>
                <a>
                    Add Story
                </a>
            </Link>
        </li>
        <li>
            <Link href='#!'>
                <a>
                    Logout
                </a>
            </Link>
        </li>
    </Fragment>

    return (
        <nav className='red'>
            <div className="nav-wrapper">
                <div className="container">
                    <Link href='/'>
                        <a className="brand-logo">
                            Next.js | Auth
                        </a>
                    </Link>
                    <ul className="right">
                        {guestLinks}
                        <li className='hide-on-med-and-down'>
                            <Link href='/about'>
                                <a>
                                    About
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;