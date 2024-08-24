import React from 'react'
import { category, appleProducts, macTypes, appleWatches } from "../categories";

function Footer(arr) {
  const logo = "https://purepng.com/public/uploads/large/purepng.com-apple-logologobrand-logoiconslogos-251519938788qhgdl.png"
  return (
    <div>
      
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img src={logo} className="w-10 ml-6" alt="Apple Logo" />
        <span className="ml-3 text-xl">Bhatti</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">
        Buy Mac or Ipad for college with education savings.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
        {category.map((item, index) => (
          <li>
              <a className="text-gray-600 hover:text-gray-800" key={index}>{item}</a>
          </li>
      ))}

        
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          IPHONE
        </h2>
        <nav className="list-none mb-10">
        {appleProducts.map((item, index) => (
          <li>
              <a className="text-gray-600 hover:text-gray-800" key={index}>{item}</a>
          </li>
        ))}
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          MACBOOK
        </h2>
        <nav className="list-none mb-10">
        {macTypes.map((item, index) => (
          <li>
              <a className="text-gray-600 hover:text-gray-800" key={index}>{item}</a>
          </li>
        ))}
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            APPLE WATCH
        </h2>
        <nav className="list-none mb-10">
        {appleWatches.map((item, index) => (
          <li>
              <a className="text-gray-600 hover:text-gray-800" key={index}>{item}</a>
          </li>
        ))}
        </nav>
      </div>
    </div>
  </div>
  <div className="border-t border-gray-200">
  <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
    <div className="flex md:flex-nowrap m-auto flex-wrap justify-center items-end md:justify-start">
      <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
        <label
          htmlFor="footer-field"
          className="leading-7 text-sm text-gray-600"
        >
          Newsletter
        </label>
        <input
          type="text"
          id='subscriptionEmail'
          name="footer-field"
          placeholder='Subscribe Newsletter'
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button id='subscriptionBtn' className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
        Subscribe
      </button>
      <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
        For Updated New Products
        <br className="lg:block hidden" />
        and receive Top Products.
      </p>
    </div>
  </div>
</div>

  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2020 Tailblocks —
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          @knyttneve
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
    
  </div>
</footer>

    </div>
  )
}

export default Footer