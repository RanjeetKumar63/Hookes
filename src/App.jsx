// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [car, setCar] = useState({
//     brand: "Ferrari",
//     model: "Roma",
//     year: "2023",
//     color: "Red",
//   });
//   const changeColor = () => {
//     setCar((prev) => {
//       return { ...prev, color: "blue" };
//     });
//   };

//   return (
//     <div>
//       <h1>My {car.brand}</h1>
//       <h2>
//         It is a {car.color}, {car.model} & {car.year} Roma from 2023
//       </h2>
//       <button onClick={changeColor}>Blue</button>
//     </div>
//   );
// };

// export default App;

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
//   const [name, setName] = useState("Exotic_Coder");
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 2000);
//   }, [count, name]);
//   return (
//     <div>
//       <h1>
//         I've rendered {count} {""}
//         {name} times!
//       </h1>
//     </div>
//   );
// };

// export default App;

//             **************  UseRef ******************
// import React, { useEffect, useRef, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [value, setValue] = useState(0);
//   //const [count, setCount] = useState(0);
//   const count = useRef(0);
//   console.log(count);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });
//   return (
//     <>
//       <button
//         onClick={() => {
//           setValue((prev) => prev - 1);
//         }}
//       >
//         -1
//       </button>
//       <h1>{value}</h1>
//       <button
//         onClick={() => {
//           setValue((prev) => prev + 1);
//         }}
//       >
//         +1
//       </button>
//       <h1>Render Count : {count.current}</h1>
//     </>
//   );
// };

// export default App;

// const App = () => {
//   const inputElement = useRef();

//   const btnClicked = () => {
//     console.log(inputElement.current);
//     inputElement.current.style.background = "blue";
//   };

//   return (
//     <>
//       <input type="text" placeholder="First Name" ref={inputElement} />
//       <button onClick={btnClicked}>Click Here</button>
//     </>
//   );
// };

// export default App;

//       **************     use Memo Hook  ****************
import React, { useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculation Done!");
    return Math.pow(num, 3);
  }

  const result = useMemo(() => {
    cubeNum(number);
  }, [number]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h1>Cube of the number : {result}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ++{" "}
      </button>
      <h1> Counter : {counter}</h1>
    </>
  );
};

export default App;
