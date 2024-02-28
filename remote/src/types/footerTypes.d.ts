export interface ImageData {
    alt: string;
    src: string;
  }
  
  export interface LinkData {
    href: string;
    target: string;
    title: string;
    children?: string;
  }
  
  export interface LogoData {
    image: ImageData;
    link: LinkData;
  }
  
  export interface FooterData {
    badgeImage: LogoData;
    brandImage: LogoData;
    caption: string;
    card: {
      description: string;
      links: LinkData[];
      title: string;
    };
    copyright: string;
    partnersLogos: LogoData[];
    socialsLink: {
      icon: string;
      iconHover: string;
      link: LinkData;
    }[];
    usefulLinks: LinkData[];
  }
  
  export interface FooterProps {
    isPublic: boolean;
  }