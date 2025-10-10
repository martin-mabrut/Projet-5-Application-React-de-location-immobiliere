export type Listing = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: '1' | '2' | '3' | '4' | '5';
  location: string;
  equipments: string[];
  tags: string[];
};
