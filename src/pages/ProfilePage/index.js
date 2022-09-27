import React from 'react'
import { UserTable } from "../../components";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="flex h-screen flex-col justify-center items-center">
          <h1 className="text-center text-4xl font-bold">Profile Page</h1>
          <UserTable />
      </div>
      </div>
    
  );
}