import { useEffect, useState } from "react";
import "./Navbar.scss";
import Hamburger from "hamburger-react";
import { Drawer } from "antd";

const NavBar: React.FC<{ scrollTo: (index: number) => void }> = ({
  scrollTo,
}) => {
  const [showMenu, setshowMenu] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowSize.width < 600) {
    return (
      <div className="p-4" style={{ float: "right" }}>
        <Hamburger
          onToggle={() => {
            setshowMenu(!showMenu);
          }}
        />
        <Drawer
          width={204}
          onClose={() => setshowMenu(false)}
          closeIcon={false}
          open={showMenu}
        >
          <div className="navbar-mobile bg-black  h-full">
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
        </Drawer>
      </div>
    );
  }
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
