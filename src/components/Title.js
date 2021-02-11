const Title = ({ winner, turn }) => {
  if (winner) {
    return <h1>Winner: {turn}</h1>;
  }

  return <h1>Tic Tac Toe</h1>;
};

export default Title;
