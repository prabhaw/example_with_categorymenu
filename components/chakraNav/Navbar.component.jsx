import CatagoryBar from "./CatagoryBar.component";
import MiddelNavbar from "./MiddelNav.component";
import TopBar from "./TopBanner.component";

const NavbarTop = (props) => {
  return (
    <>
      <TopBar />
      <MiddelNavbar />
      <CatagoryBar />

      <style jsx>{``}</style>
    </>
  );
};

export default NavbarTop;
