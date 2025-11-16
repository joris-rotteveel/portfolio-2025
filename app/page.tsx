import { brandsOrdered } from "@/data/brands";
import { experienceSorted } from "@/data/experience";
import { projects } from "@/data/portfolio-data";
import PortfolioItem from "@/components/PortfolioItem";

export default function Home() {
  // Group experience by year (use 'to' year for completed, 'from' year for ongoing)
  const experienceByYear = experienceSorted.reduce((acc, exp) => {
    const year = exp.to ?? exp.from;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(exp);
    return acc;
  }, {} as Record<number, typeof experienceSorted>);

  // Get years sorted descending
  const years = Object.keys(experienceByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="t-bc">
      <main className="ui-grid gap-y-24">
        <div className="col-span-full grid gap-8 mb-32">
          <h1 className="t-d1">About me</h1>
          <p className="max-w-800">
            Hi, I’m Joris, a Senior Developer and Creative Technologist based in
            New Plymouth, Aotearoa New Zealand. I am a results driven frontend
            engineer who enjoys the mix of creativity and clear process. My work
            sits somewhere between UX, design, and engineering. I enjoy
            collaborating across disciplines, understanding the people behind a
            brief, and building interactive experiences that feel delightful and
            purposeful. I have been doing this for more than 20 years across
            brand sites, interactive installations, and product driven web
            applications.
          </p>
          <p className="mt-8 max-w-800">
            I am currently moving pixels at Gladeye, where I work across
            National Geographic projects, accessible museum experiences,
            internal tooling, and cross team collaboration.
          </p>
        </div>
        <div className="col-span-full grid gap-8 mb-32">
          <h2 className="t-d2 mb-24">Skills</h2>
          <p>
            HTML / CSS / JavaScript / TypeScript / React / WebGL / Interactive
            installations
          </p>
        </div>

        <div className="col-span-full grid gap-8 mb-32">
          <h2 className="t-d2 max-w-700">
            Some of the brands I have worked for
          </h2>
          <ul className="grid gap-8 mt-24">
            {brandsOrdered.map((brand) => {
              return <li key={brand}>{brand}</li>;
            })}
          </ul>
        </div>
        <div className="col-span-full grid gap-8 mb-32">
          <h2 className="t-d2 mb-24">Experience</h2>
          {years.map((year) => (
            <div key={year}>
              {/* <h3 className="t-h2 mb-4">{year}</h3> */}
              <ul className="grid gap-8">
                {experienceByYear[year].map((experience) => {
                  const yearRange = experience.to
                    ? `${experience.from} – ${experience.to}`
                    : `${experience.from} – now`;
                  return (
                    <li key={experience.title}>
                      <span className="t-h2">{experience.title}</span>
                      <span className="t-bc-small block"> ({yearRange}) </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="col-span-full grid gap-8 mb-32">
          <h2 className="t-d2 ">Work</h2>
          <p>These are some of the projects I&rsquo;ve been involved in:</p>
          <div className="mt-24">
            {projects.map((project) => {
              return <PortfolioItem {...project} key={project.title} />;
            })}
          </div>
        </div>
      </main>
      <footer className="ui-grid">
        <p className="col-span-full text-right">Thanks for dropping by!</p>
      </footer>
    </div>
  );
}
