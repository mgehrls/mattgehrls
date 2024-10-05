import React from "react";

function Main() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <div id="work">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
        nesciunt veniam commodi iusto quis eius obcaecati minus doloremque
        numquam, doloribus sequi explicabo vitae omnis perspiciatis
        necessitatibus, laboriosam quisquam enim. Tempore sint, itaque totam
        atque illo iste! Molestias perspiciatis sint qui corporis. Natus,
        aliquid quibusdam numquam laudantium cum neque consequuntur ratione,
        doloremque minus illo totam odit expedita iure earum libero quo sunt
        doloribus rerum quas asperiores fuga labore. Temporibus fuga,
        voluptatibus doloremque illo, ea perspiciatis veniam eveniet consequatur
        rerum reiciendis voluptates eos cum aliquid maxime dolorem ut sunt
        adipisci aperiam deserunt cumque, sed nesciunt. Atque, quis! Saepe sunt
        fuga corporis placeat consequuntur dolore officiis repudiandae nemo
        eaque quaerat autem illo, quisquam eligendi nihil amet magnam magni.
        Quam, in eveniet ipsa nesciunt incidunt dicta rem quo itaque temporibus
        vitae beatae architecto perspiciatis libero asperiores cupiditate harum
        perferendis labore esse illum consectetur eum? In tempore facilis hic
        harum libero esse debitis dignissimos porro culpa quisquam assumenda
        inventore laboriosam totam, vel quidem provident quia tempora suscipit
        deleniti possimus repudiandae enim! Illum saepe sequi pariatur minus
        quas, numquam magnam voluptatem, ab aspernatur, nemo totam corporis
        perspiciatis accusantium tenetur! Aliquam necessitatibus non excepturi
        dicta, earum voluptate velit minus recusandae fugiat? Cupiditate
        facilis, odio modi possimus unde minus delectus quia officia aut dicta
        impedit ipsum ut dolor omnis vitae at quod natus. Accusamus, odit. Id,
        dolor! Nihil, repellat. Error, porro commodi nihil quaerat libero eum
        beatae quae nobis expedita magni adipisci, architecto nam dolorum, illum
        suscipit dolorem voluptas repellendus enim! Minus quod sit perspiciatis
        fugiat molestias unde exercitationem iste, dolorem magni, veniam
        accusamus sed odio modi iusto ullam alias porro eveniet saepe optio sint
        quidem. Voluptate deserunt tempore magni at inventore velit ullam sit
        natus necessitatibus consequuntur cupiditate, ratione eligendi error,
        eveniet, incidunt est voluptatibus dolorum quo? Harum quod possimus sit
        cumque ipsa. Dolorum exercitationem facilis explicabo ipsa accusamus
        porro ab ratione! Nihil odio porro perferendis ut? Amet, quod illo qui
        nisi maiores itaque ducimus voluptatum repellat porro quasi, eveniet
        harum nulla quam natus voluptas iusto et nostrum, velit eius quibusdam
        unde numquam. Placeat consequuntur saepe tenetur quam quo eius
        voluptatem numquam, quaerat earum esse sequi voluptates temporibus
        aliquid! Eligendi deleniti, error ratione qui eveniet, dignissimos natus
        nesciunt, eius at sed earum perspiciatis et. Nihil labore est molestias
        dignissimos ullam quibusdam corrupti ducimus hic quisquam, iusto,
        aperiam repellendus rerum aliquam voluptas temporibus at necessitatibus
        cum consectetur laboriosam. Amet optio at rem ex rerum? Quaerat harum
        dolores atque dolore, odit accusamus ad sit at maiores magni quam
        inventore voluptates officia assumenda repudiandae laboriosam,
        exercitationem sequi. Eos facilis nobis deleniti amet ratione adipisci
        reprehenderit inventore minus qui incidunt pariatur labore vel, quod
        debitis enim, dolores perferendis distinctio perspiciatis dignissimos.
        Voluptas esse sint eveniet molestias cumque ducimus voluptates
        accusantium, adipisci necessitatibus qui! Tempore repellendus quisquam
        non quaerat modi molestias deserunt incidunt ducimus. Quaerat magnam
        facere necessitatibus inventore explicabo laudantium ratione?
        Repellendus ex, eos atque error eius temporibus molestiae nulla minima
        id libero! Id qui error earum perferendis voluptatum. Excepturi atque
        commodi unde nobis. Molestiae adipisci cumque aliquid deserunt officiis
        minima.
      </div>
    </main>
  );
}

export default Main;

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="mt-4">
        <p>
          I found code through automating repetitive tasks as a real estate
          transaction coordinator in 2018, started learning the basics in 2020,
          and in mid 2021 left my job to learn full stack development full time.
        </p>
        <p className="mt-4">
          Now I’ve had the opportunity to lead development on a greenfield MVP
          for an international art competition, worked on multiple production
          CMS’, and have coded extensively in an enterprise level code base.
        </p>
        <p className="mt-4">And I’m ready for the next challenge.</p>
      </div>
    </section>
  );
};
