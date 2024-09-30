import './tailwind.css';

import type React from 'react';
import logoUrl from '../assets/logo.svg';
import { Link } from '../components/Link.js';

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
    return (
        <div className=''>
            <Sidebar />
            <Content>{children}</Content>
        </div>
    );
}

function Sidebar() {
    return (
        <div className='navbar bg-base-100 border-b'>
            <div className='navbar-start'>
                <div className='dropdown'>
                    <button tabIndex={0} type='button' className='btn btn-ghost lg:hidden'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <title>Menu</title>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h8m-8 6h16'
                            />
                        </svg>
                    </button>
                    <ul className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
                        <li>
                            <Link href='/'>Proof of concept</Link>
                        </li>
                    </ul>
                </div>
                <a href='/' className='p-2'>
                    <img src={logoUrl} alt='logo' />
                </a>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link href='/'>Proof of concept</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function Content({ children }: { children: React.ReactNode }) {
    // Ids are used for transition animation in tailwind.css
    return (
        <div id='page-container'>
            <div id='page-content' className='p-5 pb-12 min-h-screen'>
                {children}
            </div>
        </div>
    );
}
