import { PortfolioItemType } from "../data/portfolio-data";

const PortfolioItem = (project: PortfolioItemType) => {
  return (
    <section className="mb-24" key={project.title}>
      <h3 className="">
        <a className="" href={project.meta.link?.url}>
          <span className="t-h2">{project.title}</span>
          <p className="t-bc-small">
            {project.with}
            {project.for ? ` for ${project.for} - ${project.meta.year}` : null}
          </p>
        </a>
      </h3>
      {/* <svg className="project__title" viewBox="0 0 56 18">
      <text x="0" y="15">
        {project.title}
      </text>
    </svg> */}
      {/* 
      <ul className="-awards">
        {project.meta.awards.map((award, index) => {
          return (
            <li className="-awards__award" key={index}>
              {award.title}
            </li>
          );
        })}
      </ul> */}
      {/* <div className="project__meta">
      <p>{project.meta.type}</p>
      <span>{project.meta.year}</span>
    </div> */}
    </section>
  );
};
export default PortfolioItem;
