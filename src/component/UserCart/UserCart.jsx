import React from "react";

const UserCart = ({user}) => {
  return (
    <div className="card bg-primary text-primary-content w-96 hover:scale-105 transition-transform duration-300">
      <div className="card-body">
        <h2 className="card-title">{user.name}</h2>
        <p>
         {user.title}
        </p>
        <div className="card-actions justify-end">
          <button className="btn">Show details</button>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
