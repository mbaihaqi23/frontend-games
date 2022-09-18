import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import DataTable from 'react-data-table-component'

const UserTable = () => {
    const [search, setSearch] = useState("")
    const [user, setUser] = useState([])
    const [filteredUser, setFilteredUser] = useState([])
  
  const getUser = async () => {
    try {
        const response = await axios.get('https://api.openbrewerydb.org/breweries')
        setUser(response.data)
        setFilteredUser(response.data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getUser();
  }, []);

//   useEffect(() => {
//     const result =  user.filter(country)
//   }, [search])

  const columns = [
    {
        name: "Id",
        selector: row => row.id,
    },
    {
        name: "Name",
        selector: row => row.name,
        sortable: true,
    },
    {
        name: "Email",
        selector: row => row.website_url,
    },
    {
        name: "Action",
        cell: row => <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-2 px-4 rounded focus:outline-none focus:shadow-outline'
                         type='submit' 
                         onClick={()=>alert(row.id)}
                        >Edit
                     </button>
    }
  ]


  return (
    <DataTable 
    columns={columns} 
    data={user} 
    pagination
    fixedHeader
    fixedHeaderScrollHeight='450px'
    selectableRows
    selectableRowsHighlight
    highlightOnHover
    subHeader
    subHeaderComponent={
        <input
        className="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="text"
        type="text"
        placeholder="Search Here"
        // onChange={() => setSearch(e.target.value)}
      />
    } 
    />
  )
}

export default UserTable