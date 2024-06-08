import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import MarthaLogo from "./images/MarthaLogo.png";

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;400;600&display=swap"},
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Arizonia&display=swap"}
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer/>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function Navbar() {
  return <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>About</a></li>
          <li>
            <a>Experience</a>
            <ul className="p-2">
              <li><Link to="programming">Programming</Link></li>
              <li><a>Marketing</a></li>
              <li><a>Education</a></li>
            </ul>
          </li>
          <li><a>Contact</a></li>
        </ul>
      </div>
        <Link to="/"className="btn btn-ghost normal-case text-xl text-lime-950 font-display">MVM</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>About</a></li>
        <li tabIndex={0}>
          <details>
            <summary>Experience</summary>
            <ul className="p-2">
            <li><Link to="programming">Programming</Link></li>
              <li><a>Marketing</a></li>
              <li><a>Education</a></li>
            </ul>
          </details>
        </li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <div className="navbar-end">
    </div>
  </div>
}

export function Footer() {
  return <footer className="footer items-center p-4 bg-neutral text-neutral-content">
    <aside className="items-center grid-flow-col">
      <p>Built with 💚 in Remix, Tailwind, and SST</p>
    </aside>
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
      </a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </nav>
  </footer>
}


// export function ErrorBoundary() {
//   const error = useRouteError();
//   console.error(error);
//   return (
//     <html>
//       <head>
//         <title>Oh no!</title>
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         Whoops! An error occurred!
//         <Scripts />
//       </body>
//     </html>
//   );
// }