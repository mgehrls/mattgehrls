
export type PortfolioItemProps = {
    title: string;
    description: string;
    href: string;
    ariaLabel: string;
    image: string;
    imageAlt: string;
  };
  
export const portfolioItems: PortfolioItemProps[] = [
      {
        href: "jamstats.app",
        title: "JamStats",
        description:
          "A web app that allows users to track their Spotify listening habits and compare them with friends.",
        image: "/images/jamstats.png",
        imageAlt: "JamStats",
        ariaLabel: "JamStats",
      },
    ];