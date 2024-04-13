export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((l) => (
        <li key={`${l.square.row}${l.square.col}`}>
          {l.player} selected {l.square.row},{l.square.col}
        </li>
      ))}
    </ol>
  );
}
