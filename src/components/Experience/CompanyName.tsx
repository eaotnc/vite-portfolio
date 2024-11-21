import React from "react";

interface CompanyNameProps {
  name: string;
  title: string;
  imagePath: string;
  link: string;
}

const CompanyName: React.FC<CompanyNameProps> = ({
  name,
  imagePath,
  title,
  link,
}) => {
  return (
    <div className="company-name">
      <a className="flex space-between" href={link} target="_blank">
        <img className="company-img" src={imagePath} alt={name} />
        <div>
          <div className="font-bold text-amber-300">{name}</div>
          {title}
        </div>
      </a>
    </div>
  );
};

export default CompanyName;
