import React from "react";

const Footer = () => {
  return (
    <footer class="bg-white fixed w-full bottom-0 dark:bg-gray-800">
      <div class="container px-6 py-5 mx-auto">
        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
          <p class="text-sm text-gray-400">
            © Copyright 2022. All Rights Reserved.
          </p>
          <p className="text-white">Made with ♥ by Utkarsh</p>
          <div class="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="#"
              class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              Privacy
            </a>

            <a
              href="#"
              class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
