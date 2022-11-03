import { Outlet } from "react-router-dom";
import OffCanvas from "../Components/OffCanvas/OffCanvas";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="off-canvas-wrapper">
        <OffCanvas />
        <div className="off-canvas-content" data-off-canvas-content>
        <Header />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
        </div>
      </div>
    </>
  )
};

export default Layout;
