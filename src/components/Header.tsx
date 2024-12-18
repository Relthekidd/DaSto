import React, { useState } from 'react';
import { Menu, X, Instagram, Twitter, Youtube, Music2 } from 'lucide-react';
import { artistInfo } from '../data/content';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <button 
              className="lg:hidden text-zinc-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {artistInfo.name}
            </h1>
            <nav className="hidden lg:flex space-x-8">
              <a href="#music" className="text-zinc-400 hover:text-white transition">Music</a>
              <a href="#videos" className="text-zinc-400 hover:text-white transition">Videos</a>
              <a href="#tour" className="text-zinc-400 hover:text-white transition">Tour</a>
              <a href="#merch" className="text-zinc-400 hover:text-white transition">Merch</a>
            </nav>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href={artistInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-500 transition">
              <Instagram size={20} />
            </a>
            <a href={artistInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-500 transition">
              <Twitter size={20} />
            </a>
            <a href={artistInfo.socialLinks.spotify} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-500 transition">
              <Music2 size={20} />
            </a>
            <a href={artistInfo.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-500 transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-zinc-800">
          <nav className="px-4 py-6 space-y-4">
            <a href="#music" className="block text-zinc-400 hover:text-white transition">Music</a>
            <a href="#videos" className="block text-zinc-400 hover:text-white transition">Videos</a>
            <a href="#tour" className="block text-zinc-400 hover:text-white transition">Tour</a>
            <a href="#merch" className="block text-zinc-400 hover:text-white transition">Merch</a>
            <div className="flex gap-6 pt-4 border-t border-zinc-800">
              <a href={artistInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-500 transition">
                <Instagram size={20} />
              </a>
              <a href={artistInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-500 transition">
                <Twitter size={20} />
              </a>
              <a href={artistInfo.socialLinks.spotify} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-500 transition">
                <Music2 size={20} />
              </a>
              <a href={artistInfo.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-500 transition">
                <Youtube size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}