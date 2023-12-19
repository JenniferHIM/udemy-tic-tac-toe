import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function hadleEditClick() {
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  // let btnCaption = "Edit";

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    // btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span id="player-symbol">{symbol}</span>
        <button onClick={hadleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
