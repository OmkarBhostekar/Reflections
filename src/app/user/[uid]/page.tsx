"use client";
import Cards from "components/Cards/Cards";
import Latest from "components/Latest";
import Recommended from "components/Recommended";
import UserCard from "components/UserCard";
import React from "react";
type Props = {};
const user = window.location.pathname.split("/")[2].toString();
const size = 1;
const userId = "omkar";
const Profile = (props: Props) => {
  return (
      <div className=" flex     ">
        
        <div className="space-y-2 pl-10">
          <UserCard />
          <h1 className="text-4xl font-bold">Recent Blogs,</h1>
          <Cards />
          <Cards />
          <Cards />

        </div>
        
        <div className="w-full space-y-3 pl-10 pr-10 pt-10">
          <h1 className="text-4xl font-bold">Popular Blogs,</h1>
          
          {size === 0 ? (
              userId === user ? (
                <>
                <p className="text-2xl">Your Blogs,</p>
                <p className="text-2xl">You have not created any blogs yet</p>
                </>
              ) : (
                <>
                <p className="text-2xl">{user} Blogs,</p>
                <p className="text-2xl">This user has not created any blogs yet</p>
                </>
              ) 
              
          ) : (
            <>
              {" "}
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </>
          )}
        </div>

      </div>
  );
};

export default Profile;
