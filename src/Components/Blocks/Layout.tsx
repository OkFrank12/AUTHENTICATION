import { Outlet } from "react-router-dom";
import Header from "./Header";
import RegisterPage from "../../Pages/RegisterPage";

const Layout = () => {
  return (
    <div>
      <Header />
      <RegisterPage />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
