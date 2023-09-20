import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(isLoading);
  return (
    <div>
      <section className=" container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center  py-7 shadow-md">
        <div>
          <h2 className="text-xl font-bold">Amazon</h2>
        </div>
        <nav>
          <ul className="flex gap-8 font-semibold">
            <NavLink to="/ " className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-blue-600 rounded-md px-2 py-1 text-white" : ""
              } > Home </NavLink>
            <NavLink to="/products" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-blue-600 rounded-md px-2 py-1 text-white" : ""
              } >Products</NavLink>
            <NavLink to="/dashboard " className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-blue-600 rounded-md px-2 py-1 text-white" : ""
              } > DashBoard </NavLink>
            
          </ul>
        </nav>
      </section>

      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <div className="min-h-screen container mx-auto px-4 md:px-8 lg:px-16 py-4 my-12">
          <Outlet></Outlet>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
