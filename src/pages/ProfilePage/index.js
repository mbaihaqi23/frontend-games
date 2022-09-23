import React from 'react'
import { UserTable } from "../../components";

export default function ProfilePage() {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-column items-center">
          <h1>ProfilePage</h1>
        </div>
      </div>
      <UserTable />
    </>
  );
}