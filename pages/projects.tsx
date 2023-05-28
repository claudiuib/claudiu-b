import React from 'react'
import Image from 'next/image'
import Crypto from '../assets/crypto_project.png'
import Caps from '../assets/caps_compare.png'
export default function Projects() {
    return (
      <div className="bg-[rgb(36,36,36)] min-h-screen">
        <div className="flex justify-center">
          <p className="mt-8 text-green-100 text-3xl font-semibold">Projects</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 mx-4">
          <li className="bg-green-100 rounded-sm">
            <a href="https://github.com/claudiuib/cw2-big-data">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <Image className="rounded-md" src={Crypto} alt="Crypto Image" />
                  <div className="font-bold text-xl mb-2">Crypto Compare Website</div>
                </div>
  
                <div className="px-6 pb-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Github
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li className="bg-green-100 rounded-sm">
            <a href="https://github.com/claudiuib/web-scrapper-caps">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <Image className="rounded-md" src={Caps} alt="Crypto Image" />
                  <div className="font-bold text-xl mb-2">Caps Web Scraper Website</div>
                </div>
  
                <div className="px-6 pb-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Github
                  </span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
  