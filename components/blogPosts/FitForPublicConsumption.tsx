const pTagClasses = "text-slate-200 text-md tracking-wide leading-loose";
const headerClasses = "text-xl font-bold tracking-wide leading-loose";

const FitForPublicConsumption = () => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <div>
        <h1 className="text-2xl font-bold tracking-wide">
          Fit for Public Consumption
        </h1>
        <hr className="border-white w-full max-w-sm" />
        <div className="flex justify-between max-w-sm">
          <p className="text-sm text-slate-100 tracking-wide leading-loose">
            by: Matt Gehrls
          </p>
          <p className="text-sm text-slate-100 tracking-wide leading-loose">
            06/01/2023
          </p>
        </div>
      </div>
      <p className={pTagClasses}>
        Most people that get into code like to tinker. We make our little
        projects to learn something new and never finish it because we figured
        out what we needed to.
      </p>
      <p className={pTagClasses}>
        {
          "That is the not-so-virtuous cycle I've been in for the last year. Not feeling “ready” for that first position, and maybe not confident the the quality of my work. Thanks to working with others in the community and sharing my code with other devs, I've realized my work paid off. I'm comfortable saying I'm a full stack developer without a hint of imposter syndrome, but so far I've had nothing to show off."
        }
      </p>
      <p className={pTagClasses}>
        {
          "That's changed. I am going to start putting projects online and publicly 'advertise' them on social media. For accountability sake here's the plan:"
        }
      </p>
      <div>
        <h3 className={headerClasses}>Online Presence</h3>
        <p className={pTagClasses}>
          {
            "Happening right here. Mattgehrls.com is a living resume site where I will post updates, and link off to the other projects I'm working on. I posted this link on LinkedIn to pressure myself into going public. Vulnerability is hard, but I'm committed to working publicly because I'm confident that my work will show I can add value to people I work with/for."
          }
        </p>
        <br />
        <p className={pTagClasses}>
          {
            "If anyone is looking at this site and thinking “this is an ugly site, why would you advertise this?” I haven't been working on this. I threw it together in an hour or two. I need to finish a project I'm nearly done with, then redesigning this is next on the agenda. Everything is a work in progress."
          }
        </p>
        <br />
      </div>
      <div>
        <h3>
          <a
            className={headerClasses + " underline"}
            href="http://www.streamsave.app"
          >
            Streamsave.app
          </a>
        </h3>
        <p className={pTagClasses}>
          {
            "Sharing my work. Streamsave is a site I've been working on for a long time. I first made it in vanilla javascript in a tutorial through "
          }
          <a className="underline" href="https://scrimba.com">
            Scrimba.
          </a>{" "}
          {
            " Since then I've rewritten it to learn Next.JS, then again to learn Sveltekit. It uses a REST API of movies and tv shows. Users can create an account, 'favorite' shows and movies, and organize their favorites in a few ways using Supabase for auth and Postgres database."
          }
        </p>
        <br />
        <p className={pTagClasses}>
          {
            "An earlier version was compared to a bootcamp graduates final project. I think it's a lot better now, and it's nearly ready to release. Soft launch is available at "
          }
          <a className="underline font-bold" href="http://www.streamsave.app">
            here.
          </a>
        </p>
      </div>
      <div>
        <h3 className={headerClasses}>Profit?</h3>
        <p className={pTagClasses}>
          {
            "I have a game I made in Flutter that will come after I have a good Sveltekit and Next.JS site up. I'm getting more involved in the community. I was just added as an Organizer of the local chapter of the Google Development group. The job market stopped handing out 100k jobs for vanilla javascript so even though I'm doing good, quality work I need someone in a hiring position to see it. That's the new priority."
          }
        </p>
      </div>
    </div>
  );
};

export default FitForPublicConsumption;
