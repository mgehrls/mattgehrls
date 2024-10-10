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
        href: "https://jam-stats.vercel.app/",
        title: "JamStats",
        description:
          "See your most popular artists, tracks, and genres on Spotify. Visualize your listening habits and share them with friends. This project was built with Next.js, Next-Auth, Tailwind CSS, and the Spotify API in collaboration with my friend and former colleague Trevor Mathiak.",
        image: "/images/jamstats-logo.png",
        imageAlt: "JamStats",
        ariaLabel: "JamStats",
      },
      {
        href: 'https://streamsave.app/',
        title: 'StreamSave',
        description: 'Fill your show hole with StreamSave. A Next.JS web app designed to keep track of your favorite shows, make a watch list, and discover new shows. Data and images courtesy of themovieDB.org API. PlanetScale removed their free tier, so it is currently being reworked with MongoDB and is not currently working.',
        image: '/images/streamsave-logo.png',
        imageAlt: 'StreamSave',
        ariaLabel: 'StreamSave',
      },
    ];