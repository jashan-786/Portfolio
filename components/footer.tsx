import Link from "next/link";
import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="px-4 text-center border-t border-slate-800 text-gray-400 py-3">
      <div className="max-w-5xl mx-auto flex justify-between">
        <small className="mb-2 block text-sm text-gray-800 dark:text-gray-100 ">
          &copy; 2024 Jashanpreet Singh
        </small>
        <div className="flex items-center gap-3">
          <Link
            href={"https://github.com/jashan-786"}
            className=" hover:text-black dark:hover:text-white transition-all ease-in duration-200"
            target="_blank"
          >
            <BsTwitter />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/jashan786"}
            target="_blank"
            className=" hover:text-black dark:hover:text-white transition-all ease-in duration-200"
          >
            <BsGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
}
