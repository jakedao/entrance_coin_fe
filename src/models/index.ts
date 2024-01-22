export type TLinks = {
  homepage: string;
  github: string;
};

export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  description: string;
  current_price: number;
  links: TLinks;
  image: string;
}

export type TMenuItem = {
  id: string;
  name: string;
};
