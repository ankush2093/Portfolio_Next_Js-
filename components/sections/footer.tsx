"use client";
import React from 'react';
import { Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold">@Codecraftiness</h2>
                    <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="https://www.youtube.com/@Codecraftiness" target="_blank" rel="noopener noreferrer">
                        <Button className='rounded-full hover:text-red-600'>
                            YouTube
                            <Youtube className="h-4 w-4" />
                        </Button>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


