import "./Experience.scss";
import ProjectBox from "./ProjectBox";
import techCombine from "../../assets/company-logo/opn.png";
import CompanyName from "./CompanyName";

const TechCombine = () => {
  return (
    <div className="company">
      <CompanyName
        name="OPN (Contract)"
        link="https://www.opn.ooo"
        imagePath={techCombine}
        title="Jan 2024 - Dec 2024"
      />
      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <ProjectBox
            name="TICKETIER (GMM)"
            desc="The Large Ticket Selling Platform of OPN company site for GMM client"
            child={
              <ul className="project-bullets">
                <li>
                  Developed backend services using{" "}
                  <span className="text-amber-300">
                    tRPC, Prisma, and PostgreSQL
                  </span>
                  .
                </li>
                <li>
                  Implemented and maintained event pre-registration workflows.
                </li>
                <li>
                  Optimized PostgreSQL performance through query tuning and
                  composite index design.
                </li>
                <li>
                  Improved query latency from 2.5s to 150ms and API response
                  time from 1.2s to 200ms.
                </li>
                <li>
                  Reduced database CPU utilization by 40% and reduced query
                  costs by 90%.
                </li>
                <li>
                  Performed scalability and load testing using{" "}
                  <span className="text-amber-300">Artillery</span> to validate
                  system performance under high concurrent traffic.
                </li>
                <li>
                  Implemented <span className="text-amber-300">Redis</span>{" "}
                  caching and queue processing to improve scalability and
                  reduce database load.
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TechCombine;
