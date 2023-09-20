import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <section className=" container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center  py-7 shadow-md">
        <div>
          <h2 className="text-xl font-bold">Amazon</h2>
        </div>
        <nav>
          <ul className="flex gap-8 font-semibold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="min-h-screen container mx-auto px-4 md:px-8 lg:px-16 py-4 my-12">
        <Outlet></Outlet>
          </div>
          <Footer></Footer>
    </div>
  );
};

export default MainLayout;
