import React, { createContext, useState } from 'react';


import { DisplayCounter } from './components/DisplayCounter';


export const CounterContext: any = createContext(0);


function App() {

  const [counter, setCounter] = useState(0)
  return (
    <CounterContext.Provider value={counter}>
      <section>
        <DisplayCounter />

        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setCounter(prev => prev < 1 ? 0 : counter - 1)}>Remove</button>
      </section>
    </CounterContext.Provider>
  );
}

export default App;
