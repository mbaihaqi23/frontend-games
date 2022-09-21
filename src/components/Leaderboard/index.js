import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Leaderboard() {
  const [users, setUsers] = useState([])  

  const getUsers = async () => {
    try {
        const response = await axios.get('https://api.openbrewerydb.org/breweries')
        setUsers(response.data)
          
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  
    return ( 
        <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Name
                                </th>
                                <th 
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Score
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">

                           {users.map((data, index) => (

                            <tr key={index}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 text-sm text-left text-gray-800 whitespace-nowrap">
                                    {data.name}
                                </td>
                                <td className="px-6 py-4 text-sm text-left text-gray-800 whitespace-nowrap">
                                    {data.phone}
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
  }

