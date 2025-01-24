import React from "react";

const Learning = () => {
  const details = [
    {
      name: "Goodluck",
      occupation: "Student",
      Residence: "Enugu",
      School: "ABSU",
      favourite: "Rice",
    },
  ];

  return (
    <div>
      {details.map((item) => (
        <div className="pl-[30px] flex justify-evenly">
          <p>{item.name}</p>
          <p>{item.occupation}</p>
          <p>{item.Residence}</p>
          <p>{item.School}</p>
          <p>{item.favourite}</p>
        </div>
      ))}
    </div>
  );
};

export default Learning;
