import { useEffect, useState } from "react";
import "./Navbar.scss";
import Hamburger from "hamburger-react";
import { Drawer, Switch } from "antd";
import { toggleDarkMode } from "../../helper";

const NavBar: React.FC<{ scrollTo: (index: number) => void }> = ({
  scrollTo,
}) => {
  const [showMenu, setshowMenu] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log("width", windowSize);

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

  if (windowSize.width < 680) {
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
          <div className="navbar-mobile h-full">
            <div className="mode-item">
              <Switch
                checkedChildren="light"
                unCheckedChildren="Dark"
                onChange={toggleDarkMode}
              />
            </div>
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
      <div className="mode-item">
        <Switch
          checkedChildren="light"
          unCheckedChildren="Dark"
          onChange={toggleDarkMode}
        />
      </div>
    </div>
  );
};

export default NavBar;
