import React, { useEffect, useState } from "react";

const Card = () => {
  const [car, setCar] = useState({
    brand: "volva",
    model: "v60",
    color: "black",
  });

  useEffect(() => {
    console.log("useeffet has been excuted");
    // setCar({ brand: "BMW", model: "x8" });
    setCar({ ...car, model: "V90", color: "Gray" });
  }, []);
  return (
    <div>
      <b>
        {" "}
        {car.brand} {car.model}
        {car.color}
      </b>
    </div>
  );
};

export default Card;
