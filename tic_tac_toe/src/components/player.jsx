import { useState } from "react"

export default function Player({ name, symbol,isActive }) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(name)

  const handleClick = () => {
    setIsEditing(editing => !editing)
  }

  const handleChange = (e) => {
    setPlayerName(e.target.value)
  }

  let content = <span className="player-name">{playerName}</span>
  
  if (isEditing) {
    content = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      />
    )
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player-info">
        {content}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save':'Edit'}</button>
    </li>
  )
}
