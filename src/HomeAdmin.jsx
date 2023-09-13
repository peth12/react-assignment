import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
function HomeAdmin() {
  return (
    <Layout>
      <div className="flex justify-center items-center text-center">
        <div className="my-6">
          <h1 className="font-semibold text-[120px] text-white  hover:text-blue-600 hover:scale-105 duration-200">
            Generation Thailand
          </h1>
          <h1 className="font-semibold text-[100px] text-white hover:text-pink-400 hover:scale-105 duration-200">
            Home - Admin Sector
          </h1>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-8">
        <Link to={"/homeuser"}><button className="bg-indigo-600 text-white p-3 px-5 text-[20px]  rounded-xl hover:scale-105 duration-150">
          User Home Sector
        </button></Link>
        <Link to={"/homeadmin"}><button className="bg-indigo-600 text-white p-3 px-5 text-[20px] rounded-xl hover:scale-105 duration-150">
          Admin Home Sector
        </button></Link>
      </div>
      <div className="flex justify-center gap-10 mt-16">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="bg-green-600 text-white p-3 px-10 text-[20px] rounded-xl hover:scale-105 duration-150">
          Save
        </button>
      </div>
      <div className="flex justify-center px-6">
        <div className="w-[1444px] mt-16 ">
          <div className="card w-100 bg-base-200 shadow-xl border-indigo-700 border-4">
            <div className="card-body">
              <table className="table text-[24px] text-white">
                <tr className="text-indigo-400">
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Position</th>
                  <th></th>
                </tr>

                <tbody>
                  <tr>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>
                      <button className="bg-red-600  text-white p-4 px-5 w-[100%] text-[20px] rounded-xl hover:scale-105 duration-150">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>
                      <button className="bg-red-600  text-white p-4 px-5 w-[100%] text-[20px] rounded-xl hover:scale-105 duration-150">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>
                      <button className="bg-red-600  text-white p-4 px-5 w-[100%] text-[20px] rounded-xl hover:scale-105 duration-150">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>
                      <button className="bg-red-600  text-white p-4 px-5 w-[100%] text-[20px] rounded-xl hover:scale-105 duration-150">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomeAdmin;
