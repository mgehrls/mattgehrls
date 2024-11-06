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
        href: 'https://drcwm.org/',
        title: 'Dispute Resolution Center West Michigan',
        description: 'As part of a five person team, we put together this Wordpress site made for a local non-profit during Weekend for Good 2024. We made 30 reusable components, set up their donation service, made it accessible, and editable for their staff.',
        image: '/images/drcwm-logo.png',
        imageAlt: 'Dispute Resolution Center West Michigan',
        ariaLabel: 'Dispute Resolution Center West Michigan',
      },
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
        description: 'Fill your show hole with StreamSave. A Next.JS web app designed to keep track of your favorite shows, make a watch list, and discover new shows. Data and images courtesy of themovieDB.org API.',
        image: '/images/streamsave-cover.png',
        imageAlt: 'StreamSave',
        ariaLabel: 'StreamSave',
      },
    ];