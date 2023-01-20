import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin, BsTwitter,BsGithub } from "react-icons/bs";
import Logo from "../assets/logo.png"
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="max-w-[1420px] mx-auto flex justify-center items-center dark:bg-gray-900 mt-12"> 
      <footer className="p-2 w-full bg-white sm:p-6 dark:bg-gray-900">
        <div className="md:flex md:justify-between justify-betwen">
          <div className="mb-2 md:mb-0">
            <Link href="/" className="flex items-center">
              <img
                src={Logo.src}
                className="h-8 mr-3"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Reflections
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
               <Link href="/about" >About us</Link>
              </h2>
              
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              <Link href="/contact" >Contact us</Link>
              </h2>
              
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              Reflections™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebook className="w-5 h-5"/>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
               <BsGithub className="w-5 h-5"/>
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
               <BsTwitter className="w-5 h-5"/>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
               <BsLinkedin className="w-5 h-5"/>
              <span className="sr-only">GitHub account</span>
            </a>
          
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
