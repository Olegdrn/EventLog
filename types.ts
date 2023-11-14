export interface Card {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: string[];
  key_techs: string[];
}