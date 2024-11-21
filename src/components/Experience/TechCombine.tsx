import "./Experience.scss";
import ProjectBox from "./ProjectBox";
import techCombine from "../../assets/company-logo/techcombine.png";
import CompanyName from "./CompanyName";

const TechCombine = () => {
  return (
    <div className="company">
      <CompanyName
        name="TechCombine"
        link="https://www.techcombine.co"
        imagePath={techCombine}
        title="2023 - present (1 year) 1 project "
      />
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
