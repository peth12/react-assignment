import Layout from "./Layout";
import { Link } from "react-router-dom";
import useData from "./hooks/hooks";
import { useState } from "react";
function HomeAdmin() {

  const { get, remove, create } = useData();

  const createEmployees = (name, lastname, position) => {
    let id = Math.floor(Math.random() * 10000);
    const data = {
      id: id,
      name: name,
      lastname: lastname,
      position: position,
    };
    create(data);
  };
  const [nameEmployee, setNameEmployee] = useState("")
  const [lastnameEmployee, setLastNameEmployee] = useState("")
  const [positionEmployee, setPositionEmployee] = useState("")



  const CreateData = () => {
    createEmployees(nameEmployee, lastnameEmployee, positionEmployee)

  }

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
        <Link to={"/homeuser"}>
          <button className="bg-indigo-600 text-white p-3 px-5 text-[20px]  rounded-xl hover:scale-105 duration-150">
            User Home Sector
          </button>
        </Link>
        <Link to={"/homeadmin"}>
          <button className="bg-indigo-600 text-white p-3 px-5 text-[20px] rounded-xl hover:scale-105 duration-150">
            Admin Home Sector
          </button>
        </Link>
      </div>
      <div className="flex justify-center gap-10 mt-16">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"

          onChange={(ev)=> setNameEmployee(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"

          onChange={(ev)=> setLastNameEmployee( ev.target.value)}
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"

          onChange={(ev)=> setPositionEmployee(ev.target.value)}
        />
        <button onClick={() => CreateData(nameEmployee, lastnameEmployee, positionEmployee)} className="bg-green-600 text-white p-3 px-10 text-[20px] rounded-xl hover:scale-105 duration-150">
          Save
        </button>
      </div>
      <TableAdmin dataEmployees={get()} remove={remove}  />
    </Layout>
  );
}

const TableAdmin = (props) => {
  const { dataEmployees, remove } = props;
  return (
    <>
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
                  {dataEmployees.map((items, index) => (
                    <tr key={index}>
                      <td>{items.name}</td>
                      <td>{items.lastname}</td>
                      <td>{items.position}</td>
                      <td>
                        <button
                          onClick={() => remove(items.id)}
                          className="bg-red-600  text-white p-4 px-5 w-[100%] text-[20px] rounded-xl hover:scale-105 duration-150"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;
