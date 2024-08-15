/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Counter = ({ count, increment }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
