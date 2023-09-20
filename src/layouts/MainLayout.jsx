import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
          <section className="flex justify-between items-center px-16 py-7 shadow-md">
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
        <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
