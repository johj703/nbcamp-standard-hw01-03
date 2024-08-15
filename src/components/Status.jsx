/* eslint-disable react/prop-types */
const Status = ({ count }) => {
  return (
    <div>
      <p>{count > 10 ? "High count!" : "Keep counting!"}</p>
    </div>
  );
};

export default Status;
