"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold">Company Name</h2>
                    <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-400">About</a>
                    <a href="#" className="hover:text-gray-400">Services</a>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


