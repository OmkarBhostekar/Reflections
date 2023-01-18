"use client";
import React from "react";
import { Navbar as Nav } from "flowbite-react";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="max-w-[1420px] mx-auto flex justify-center items-center">
      <Nav
        // fluid={true}
        rounded={true}
        className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 static w-full z-20 border-b border-gray-200 dark:border-gray-600"
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Nav.Brand href="/" className="flex items-center cursor-pointer">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Reflections
            </span>
          </Nav.Brand>

          <div className="hidden flex items-center md:block md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="user photo"
              />
            </button>
          </div>

          <Nav.Toggle />
          <Nav.Collapse>
            <Nav.Link className="text-blue-600 md:hidden" href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/navbars">Services</Nav.Link>
            <Nav.Link href="/navbars">Pricing</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link className="text-red-600 md:hidden" href="/contact">Log Out</Nav.Link>
          </Nav.Collapse>
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;
