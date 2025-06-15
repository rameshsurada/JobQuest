import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  return (
    <div className=" w-full shadow flex justify-between items-center px-10  py-2 ">
      <div className="flex ">
        <p className="text-blue-700 font-bold text-xl"> Job</p>{" "}
        <p className=" text-slate-800 font-bold text-xl"> Quest</p>
      </div>
      {user ? (
        <div className="flex gap-3">
          <Link to="/applications"> Applied Jobs</Link> <p>|</p>
          <p> Hi, {user.firstName}</p>
          <UserButton />
        </div>
      ) : (
        <div className="flex gap-8">
          {" "}
          <button className="text-gray-600"> Recruiter Login</button>
          <button
            className="bg-blue-500 text-white rounded-2xl px-5 py-1"
            onClick={(e) => openSignIn()}
          >
            {" "}
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
