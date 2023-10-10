import "./Navbar.scss";

const NavBar: React.FC<{ scrollTo: (index: number) => void }> = ({
  scrollTo,
}) => {
  return (
    <div className="navbar px-24">
      <div className="item" onClick={() => scrollTo(0)}>
        Home
      </div>
      <div className="item" onClick={() => scrollTo(1)}>
        About Me
      </div>
      <div className="item" onClick={() => scrollTo(2)}>
        Skills
      </div>
      <div className="item" onClick={() => scrollTo(3)}>
        Experience
      </div>
      <div className="item" onClick={() => scrollTo(4)}>
        Certificate
      </div>
    </div>
  );
};

export default NavBar;
