const History = ({ moves, handleTimeTravel }) => {
  const movesMap = moves.map((value, index) => {
    return (
      <li key={index}>
        <button onClick={() => handleTimeTravel(value)}>Turn: {index}</button>
      </li>
    );
  });

  return <ul>{movesMap}</ul>;
};

export default History;
