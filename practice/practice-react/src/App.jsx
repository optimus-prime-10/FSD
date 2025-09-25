import React, { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

// const App = () => {
//   const [form, setForm] = useState({ name: '' });

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Name"
//         onChange={e =>
//           setForm({ ...form, name: e.target.value })
//         }
//       />
//       <p>{form.name}</p>
//     </div>
//   );
// };

// export default App;

const CountContext = createContext();

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <ChildA />
      <ChildB />
      <ChildC />
    </CountContext.Provider>
  );
}

function ChildA() {
  const { count } = useContext(CountContext);
  return <p>Count: {count}</p>;
}

function ChildB() {
  const { setCount } = useContext(CountContext);
  return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}

function ChildC() {
  const { setCount } = useContext(CountContext);
  return <button onClick={() => setCount(c => c - 1)}>Decrement</button>;
}

export default Parent;