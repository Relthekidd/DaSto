export interface Album {
  id: number;
  title: string;
  releaseDate: string;
  coverArt: string;
  streamingLinks: {
    spotify?: string;
    apple?: string;
    soundcloud?: string;
  };
  tracks: string[];
}

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
  type: 'music-video' | 'behind-scenes' | 'live' | 'vlog';
  date: string;
}

export interface MerchItem {
  id: number;
  name: string;
  price: number;
  image: string;
  sizes?: string[];
  description: string;
  inStock: boolean;
}

export interface TourDate {
  id: number;
  date: string;
  venue: string;
  city: string;
  country: string;
  ticketLink?: string;
  soldOut: boolean;
}

// Example data - easily modifiable
export const artistInfo = {
  name: "RelTheKidd",
  bio: "Independent Artist pushing boundaries in modern music. Blending electronic elements with raw emotion to create unique soundscapes.",
  socialLinks: {
    instagram: "https://instagram.com/relthekidd",
    twitter: "https://twitter.com/relthekidd",
    spotify: "https://open.spotify.com/artist/yourid",
    youtube: "https://youtube.com/@relthekidd"
  }
};

export const featuredContent = {
  latestRelease: {
    id: 1,
    title: "Super Mario Brothers",
    type: "Single",
    coverArt: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800",
    streamingLink: "https://open.spotify.com/album/yourid"
  },
  upcomingShow: {
    date: "2024-11-13",
    venue: "The Crib",
    city: "Washington DC",
    ticketLink: "https://tickets.com/event"
  }
};