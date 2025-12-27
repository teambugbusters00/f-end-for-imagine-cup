"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        <div className="text-gray-600 text-sm text-center">
          &copy; {new Date().getFullYear()} CARELISTEN AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
