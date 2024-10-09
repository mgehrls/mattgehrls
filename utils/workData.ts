export type WorkItemProps = {
    timeFrame: string;
    link?: string;
    linkAriaLabel?: string;
    title: string;
    where: string;
    description: string;
    techUsed: string[];
  };
  
export const workItems: WorkItemProps[] = [
    {
      timeFrame: "Jan - July 2024",
      link: "https://www.fusionary.com",
      linkAriaLabel: "Software Development Intern at Fusionary",
      title: "Software Development Intern",
      where: "Fusionary",
      description:
        "Tech lead of a two person team on an MVP Next.js app for ArtPrize, an international art competition. Part of team responsible for the multi-site migration from one CMS to another for an enterprise level corp. Contributed to production in nine codebases. Responsibilities included making components that matched figma designs pixel perfect, creating and maintaining databases, configuring CMS settings, and reviewing other developers code.",
      techUsed: [
        "Next.js",
        "Figma",
        "Tailwind CSS",
        "React",
        "TypeScript",
        "Node.js",
        "Payload CMS",
        "Builder.io",
        "Storybook",
        "Supabase",
        "Git",
        "ClickUp",
        "Handlebars",
      ],
    },
    {
      timeFrame: "2023 - 2024",
      title: "Office Manager",
      where: "RE/MAX SunQuest",
      description:
        "A small real estate brokerage owned by a former teammate I worked with at Five Star. The previous manager had done the job for many years, and I was tasked with documenting and automating that institutional knowledge as much as possible. This included managing the QuickBooks of multiple legal entities, payroll, and all accounts payable/receivable. I created a series of Google Sheets that calculated the most complicated parts of the job, and allowed for information to be easily shared, while protecting sensitive information.",
      techUsed: [ "Google Sheets", 'QuickBooks' ],
    },
    {
      timeFrame: "2018 - 2021",
      title: "Transaction Coordinator",
      where: "Five Star Real Estate",
      description:
        "I was responsible for managing the transaction process for a small team of realtors in Grand Rapids. This included creating and managing contracts, communicating with clients, lenders, and title companies, and ensuring that all deadlines were met. I created and maintained systems to manage of all transactions, and created a system for automating repetitive tasks. I also maintained the company website and social media accounts and was responsible for online and print advertising.",
      techUsed: ["Wix", "SquareSpace", "Airtable", 'Canva'],
    },
  ];