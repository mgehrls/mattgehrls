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
      timeFrame: "Jan 2024 - July 2024",
      link: "https://www.fusionary.com",
      linkAriaLabel: "Software Development Intern at Fusionary",
      title: "Software Development Intern",
      where: "Fusionary",
      description:
        "Agencies work for a variety of clients on projects ranging from small business websites to large scale applications. Most of my time there was spent on two projects: I started and delivered an MVP Next.js app for ArtPrize, and was part of a large migration from one CMS to another for an enterprise level corp. I delivered production code in five other codebases as well. Responsibilities included making components that matched a figma design pixel perfect, creating database schemas, configuring CMS settings, and reviewing other developers code.",
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
        "CSS",
        "HTML",
        "JavaScript",
        "Git",
        "Clickup",
        "Handlebars",
      ],
    },
    {
      timeFrame: "July 2023 - Jan 2024",
      title: "Office Manager",
      where: "RE/MAX SunQuest",
      description:
        "A small real estate brokerage owned by a former teammate I worked with at Five Star. The previous manager had done the job for many years, and I was tasked with documenting and automating that institutional knowledge as much as possible. This included managing the QuickBooks of multiple legal entities, payroll, and all accounts payable/receivable. I created a series of Google Sheets that calculated the most complicated parts of the job, and allowed for information to be easily shared, while protecting sensitive information.",
      techUsed: ["Wix", "SquareSpace", "Airtable", "Google Sheets"],
    },
    {
      timeFrame: "Jan 2018 - July 2021",
      title: "Transaction Coordinator",
      where: "Five Star Real Estate",
      description:
        "I was responsible for managing the transaction process for a small team of realtors in Grand Rapids. This included creating and managing contracts, communicating with clients, lenders, and title companies, and ensuring that all deadlines were met. I created and maintained systems to manage of all transactions, and created a system for automating repetitive tasks. I also maintained the company website and social media accounts and was responsible for online and print advertising.",
      techUsed: ["Wix", "SquareSpace", "Airtable"],
    },
    {
      timeFrame: "July 2016 - December 2017",
      title: "Maintenance Manager/ Leasing Agent",
      where: "Here 2 Serve Property Management",
      description:
        "Managed a team of 6-8 maintenance technicians, and was responsible for all maintenance requests, and ensuring that all work was completed to a high standard in a timely fashion. I also screened potential tenants for rental properties, and showed properties to prospective tenants. I was responsible for all advertising, and redesigned and maintained the company website. The company went out of business in 2017.",
      techUsed: ["Wordpress", "Google Forms", "Google Sheets"],
    },
  ];