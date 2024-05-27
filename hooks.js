import React, { useContext, useEffect, useRef, useState } from 'react';

const MyContext = React.createContext("qwert");


const ComponentWithContext = () => {
    const valueFromContext = useContext(MyContext);
    return <p>Value from context: {valueFromContext}</p>;
  };
  
  const ComponentWithContext2 = () => {
    const valueFromContext = useContext(MyContext);
    return <p>Value from context2: {valueFromContext}</p>;
  };

  const MyContextProvider = ({ children }) => {
    const value = 'Value';
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
  };

const HooksExample = () => {
    const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    
    console.log('Effect: count has changed');
  }, [count]); 

 
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const valueFromContext = useContext(MyContext);
  

  return (
    <div>
      <h2>React Hooks Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <br />
      <input ref={inputRef} type="text" placeholder="Focus me with button" />
      <button onClick={handleFocus}>Focus Input</button>
      
      <MyContextProvider>
        <ComponentWithContext />
        <ComponentWithContext2 />
      </MyContextProvider>
      <ComponentWithContext2 />
      <p>Value from context: {valueFromContext}</p>
    
    </div>
  );
};



export default HooksExample;
