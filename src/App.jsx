import { Link } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <div className="h-[100vh]">
          <div className="flex justify-center items-center h-[61%]">
            <div className="flex justify-center items-center text-center">
              <div className="my-6">
                <h1 className="font-bold text-[120px] text-white outline-4  hover:text-blue-600 hover:scale-105 duration-200 text-head">
                  Generation Thailand
                </h1>
                <h1 className="font-semibold text-[100px] text-white hover:text-pink-400 hover:scale-105 duration-200">
                  React - Assessment
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-10">
            <Link to={"/homeuser"}>
              <button className="bg-indigo-600 text-white p-3 px-32 text-[28px]  rounded-xl hover:scale-105 duration-150 hover:bg-indigo-700">
                User Home Sector
              </button>
            </Link>
            <Link to={"/homeadmin"}>
              <button className="bg-indigo-600 text-white p-3 px-32 text-[28px] rounded-xl hover:scale-105 duration-150  hover:bg-indigo-700">
                Admin Home Sector
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
