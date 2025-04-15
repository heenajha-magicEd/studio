export interface PostDataElement {
  data_id: string;
  username: string;
  user_id: string;
  description: string;
  url: string;
  download: string;
  slug: string;
  created_at: string;
  updated_at: string;
  likes: number;
  views: number;
  downloads: number;
}

export interface UserData {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  location: string;
  email: string;
  portfolio_url: string;
  profile_image: string;
  isActive: boolean;
  total_likes: number;
  total_photos: number;
  for_hire: boolean;
  tags: string[];
}

export interface SearchInputConfig {
  name: string;
  placeholder: string;
  type?: string; 
  required?: boolean;
}

