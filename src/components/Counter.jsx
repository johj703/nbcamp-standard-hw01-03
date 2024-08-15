const Counter = ({ count, increment }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default Counter;
