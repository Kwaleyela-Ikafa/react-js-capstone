import React from 'react';
import { FiSettings, FiMic } from 'react-icons/fi';

const Navbar = () => (
  <>
    <nav className="relative flex flex-wrap bg-white items-center border-b border-slate-200 justify-between px-2  mb-3 nav-layout">
      <section className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div>
          <a
            className="font-bold leading-relaxed flex items-center mr-4 py-2 whitespace-nowrap text-blue-500 text-3xl"
            href="/"
          >
            <span>COIN RANKING</span>
          </a>
        </div>
        <ul>
          <li className="float-left mr-5 text-2xl">
            {' '}
            <FiMic />
            {' '}
          </li>
          <li className="float-left text-2xl">
            <FiSettings />
          </li>
        </ul>
      </section>
    </nav>
  </>
);

export default Navbar;
