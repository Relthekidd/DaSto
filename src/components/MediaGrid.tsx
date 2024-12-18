import React from 'react';
import { Play, Headphones, Image as ImageIcon } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'video' | 'podcast' | 'image';
  title: string;
  author: string;
  thumbnail: string;
  views: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'video',
    title: 'Creating Digital Art',
    author: 'Sarah Chen',
    thumbnail: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&q=80&w=800',
    views: '124K'
  },
  {
    id: 2,
    type: 'podcast',
    title: 'Future of Tech',
    author: 'Tech Talks',
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800',
    views: '45K'
  },
  {
    id: 3,
    type: 'image',
    title: 'Urban Photography',
    author: 'Mike Ross',
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800',
    views: '89K'
  }
];

const TypeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'video':
      return <Play className="w-5 h-5" />;
    case 'podcast':
      return <Headphones className="w-5 h-5" />;
    default:
      return <ImageIcon className="w-5 h-5" />;
  }
};

export default function MediaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mediaItems.map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-300"
        >
          <div className="aspect-video relative overflow-hidden">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 left-4 bg-black/60 rounded-full p-2">
              <TypeIcon type={item.type} />
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
            <div className="flex items-center justify-between text-sm text-zinc-400">
              <span>{item.author}</span>
              <span>{item.views} views</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}