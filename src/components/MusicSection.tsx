import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

interface MusicSectionProps {
  latestRelease: {
    title: string;
    type: string;
    coverArt: string;
    streamingLink: string;
  };
}

export default function MusicSection({ latestRelease }: MusicSectionProps) {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Latest Release</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative group">
            <img
              src={latestRelease.coverArt}
              alt={latestRelease.title}
              className="rounded-lg shadow-2xl w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button className="bg-purple-600 p-4 rounded-full">
                <Play className="w-8 h-8" />
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-purple-500 font-medium mb-2">{latestRelease.type}</p>
              <h3 className="text-4xl font-bold mb-4">{latestRelease.title}</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={latestRelease.streamingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
              >
                Stream Now <ExternalLink className="w-4 h-4" />
              </a>
              <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition">
                View All Releases
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}