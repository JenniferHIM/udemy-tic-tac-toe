import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function hadleEditClick() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    return <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span id="player-symbol">{symbol}</span>
        <button onClick={hadleEditClick}>Edit</button>
      </span>
    </li>
  );
}
