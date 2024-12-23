import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full  bg-slate-900 text-white rounded-t-lg mt-16 fixed bottom-0">
      <div className="container mx-auto flex justify-between py-12">
        <div className="content_1">
          <img src="/logo.webp" alt="logo"  className="w-40" />
          <p className="text-gray-300 my-10 text-lg">
            Welcome to Thapa EcomStore, your ultimate destination for cutting-edge gadgets!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" className="w-60" />
        </div>
        <div className="content_2">
          <h4 className="text-white font-medium tracking-wide mb-10 text-xl">SHOPPING</h4>
          <a href="#" className="block text-gray-300 mb-6 text-lg">Computer Store</a>
          <a href="#" className="block text-gray-300 mb-6 text-lg">Laptop Store</a>
          <a href="#" className="block text-gray-300 mb-6 text-lg">Accessories</a>
          <a href="#" className="block text-gray-300 mb-6 text-lg">Sales & Discount</a>
        </div>
        <div className="content_3">
          <h4 className="text-white font-medium tracking-wide mb-10 text-xl">Experience</h4>
          <a href="./contact.html" className="block text-gray-300 mb-6 text-lg">Contact Us</a>
          <a href="#" target="_blank" className="block text-gray-300 mb-6 text-lg">Payment Method</a>
          <a href="#" target="_blank" className="block text-gray-300 mb-6 text-lg">Delivery</a>
          <a href="#" target="_blank" className="block text-gray-300 mb-6 text-lg">Return and Exchange</a>
        </div>
        <div className="content_4">
          <h4 className="text-white font-medium tracking-wide mb-10 text-xl">NEWSLETTER</h4>
          <p className="text-gray-300 mb-10 text-lg">
            Be the first to know about new arrivals, sales & promos!
          </p>
          <div className="f-mail flex justify-between items-center">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-gray-700 border-none text-white outline-none py-3 px-2 w-full"
            />
            <i className="bx bx-envelope text-white ml-4"></i>
          </div>
          <hr className="my-4 border-gray-500" />
        </div>
      </div>
      <div className="f-design w-full text-center text-white">
        <div className="f-design-txt border-t border-gray-500 py-4 text-gray-500">
          <p>Design and Code by Thapa Technical</p>
        </div>
      </div>
    </footer>
  );
};
