export interface SearchInputConfig {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}

export interface UnsplashImage {
  id: string;
  created_at: string;
  alt_description: string;
  description: string;
  width: number;
  height: number;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3?: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    portfolio_url?: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
  likes: number;
  color: string;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

// export interface FavoriteItem {
//   id: string;
//   title: string;
//   thumbnailUrl: string;
// }

export interface FavoriteImage {
  id: string;
  url: string;
  description: string;
  [key: string]: any; // Allow other image properties
}
