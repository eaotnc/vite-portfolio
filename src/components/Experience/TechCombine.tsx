import "./Experience.scss";
import ProjectBox from "./ProjectBox";

const TechCombine = () => {
  return (
    <div className="company">
      <div className="company-name">
        <a href="https://techcombine.co" target="_blank">
          <div className="font-bold text-amber-300">TechCombine </div>
          2023 - present (1 year) doing a 1 project as follows
        </a>
      </div>
      <div className="flex">
        <div className="vertical-bar" />
        <div>
          <ProjectBox
            name="TICKETIER (GMM)"
            desc={`The Large Ticket Selling Platform of OPN company site for GMM client`}
            descSecond="Be a Backend developer on main on pre-register feature using "
            child={
              <span className="text-amber-300">TRPC, Prisma, PostgreSQL</span>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TechCombine;
