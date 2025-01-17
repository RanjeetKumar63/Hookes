import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "Red",
  });
  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "blue" };
    });
  };

  return (
    <div>
      <h1>My {car.brand}</h1>
      <h2>
        It is a {car.color}, {car.model} & {car.year} Roma from 2023
      </h2>
      <button onClick={changeColor}>Blue</button>
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const increaseCount = () => {
//     setCount((count) => count + 1);
//     setCount((count) => count + 1);
//     setCount((count) => count + 1);
//     setCount((count) => count + 1);
//   };
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={increaseCount}>Increase by 4</button>
//     </div>
//   );
// };

// export default App;

// import { useEffect, useState } from "react";

// import "./App.css";

// const App = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 2000);
//   });
//   return (
//     <div>
//       <h1>I've rendered {count} times</h1>
//     </div>
//   );
// };

// export default App;
