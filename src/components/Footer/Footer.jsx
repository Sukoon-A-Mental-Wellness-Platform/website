import React from 'react';
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center pb-8 border-b border-gray-700">
          <div className="text-5xl font-bold font-Roca">Exhale.</div>
          <div className="flex space-x-4">
          <SocialIcon url="https://linkedin.com" />
          <SocialIcon url="https://instagram.com" />
          <SocialIcon  url="https://email.com/" />
           
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Home</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/support" className="hover:underline">Find Support</a></li>
              <li><a href="/blogs" className="hover:underline">Blogs & Stories</a></li>
              <li><a href="/more" className="hover:underline">More</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/who-needs-help" className="hover:underline">Who Do You Think Needs Help?</a></li>
              <li><a href="/book" className="hover:underline">Book a Session</a></li>
              <li><a href="/heal" className="hover:underline">Heal With a Dost</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/dream" className="hover:underline">AI Based Dream Analyzer</a></li>
              <li><a href="/therapy" className="hover:underline">Audio & Video Therapy</a></li>
              <li><a href="/detox" className="hover:underline">Digital Detox</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Subscribe to our Newsletter</h3>
            <ul className="mt-4 space-y-2">

            </ul>
            <div className="mt-6">


              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="flex-1 block w-full pl-5 rounded-none rounded-l-md sm:text-sm border-gray-300"
                  placeholder="you@example.com"
                />
                <button
                  type="submit"
                  className="ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Subscribe
                </button>

              </div>
              <div className='p-4'><a href="/contact" className="hover:underline">Contact Us</a>
                <div className="pt-3">
                    <p>Copyright © {new Date().getFullYear()} - Exhale.</p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;