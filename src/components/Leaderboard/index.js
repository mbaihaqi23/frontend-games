import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import _axios from "../../helper/axios";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [cookies] = useCookies(["accessToken"]);
  const MySwal = withReactContent(Swal);
  const authToken = cookies.accessToken;
  const navigate = useNavigate();
  const getUsers = async () => {
    if (authToken === "undefined") {
      await MySwal.fire({
        title: "You Need To Login First",
        confirmButtonColor: "#3b82f6",
        icon: "error",
      });
      navigate("/");
    } else
      _axios
        .get("/leaderboard",   {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          navigate("/");
          console.log(err);
        });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <h1 className="font-bold uppercase px-2">Leaderboard 👑</h1>
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-sm font-semibold text-left text-gray-500 uppercase "
                    >
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users &&
                    users.map((data, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm text-left text-gray-800 whitespace-nowrap">
                          {data.fullname}
                        </td>
                        <td className="px-6 py-4 text-sm text-left text-gray-800 whitespace-nowrap">
                          {/* sementara biar keliatan ada poinnya */}
                          {Math.floor(Math.random() * data.totalPoint)}
                          {/* {data.totalPoint} */}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
