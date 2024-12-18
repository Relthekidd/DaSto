import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { TourDate } from '../data/content';

interface TourSectionProps {
  upcomingShow: {
    date: string;
    venue: string;
    city: string;
    ticketLink?: string;
  };
}

export default function TourSection({ upcomingShow }: TourSectionProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Tour Dates</h2>
        <div className="bg-black/50 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-500">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(upcomingShow.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="w-5 h-5" />
                <span>{upcomingShow.venue} • {upcomingShow.city}</span>
              </div>
            </div>
            <div className="flex gap-4">
              {upcomingShow.ticketLink && (
                <a
                  href={upcomingShow.ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
                >
                  Get Tickets
                </a>
              )}
              <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition">
                View All Dates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}