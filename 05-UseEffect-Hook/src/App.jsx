// import { useEffect, useState } from 'react';

// function App() {
//   const [count, setCounter] = useState(0);
//   const [data, setData] = useState(0);

//   useEffect(() => {
//     console.log("Counter Function", count,data);
//   }, [count,data]); // runs when count changes

//   return (
//     <div>
//       <h1>UseEffect Hook</h1>

//       <button onClick={() => setCounter(prev => prev + 1)}>
//         Counter {count}
//       </button>

//       <button onClick={() => setData(prev => prev + 1)}>
//         Data {data}
//       </button>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Counter from './components/counter'
const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Counter/>
    </div>
  )
}

export default App