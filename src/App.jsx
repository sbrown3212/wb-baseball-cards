import playerData from "./playerData";
import { useState } from "react";

// 4. Still in map. Destructure props data.
function BaseballCard({name, team, position, stats, imgUrl, cardId}) {
  // 5. Still in map. Set up showPicture state (default is true)
  let [showPicture, setShowPicture] = useState(true);

  const toggleCard = () => setShowPicture(!showPicture);

  // 6. Finish map iteration. If showPicture is true, return name and picture. Else, return name, team, position, and stats. When card is clicked, toggleCard function inverts showPicture which triggers a rerender. Repeat steps 3 through 6 for all player objects in playerData.
  if (showPicture) {
    return (
        <div className="card" onClick={toggleCard}>
          <h2>{name}</h2>
          <img src={imgUrl} alt="" />
        </div>
      );
  } else {
    const statsDisplay = [];
    for (const key in stats) {
      const element = <p>{key}: {stats[key]}</p>;
      statsDisplay.push(element);
    }

    // // Lab instructions solution:
    // const statsDisplay = Object.entries(props.stats).map(([statName, statValue]) => (
    //   <p key={statName}>
    //     {statName}: {statValue}
    //   </p>
    // ));
    
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{name}</h2>
        <p>Team: {team}</p>
        <p>Position: {position}</p>
        {statsDisplay}
      </div>
    )
  } 
}

// 1. when App() is invoked in main.jsx
function App() {
  // 2. Invoke cards arrow function
  const cards = playerData.map((player) => (
    // 3. Begin map of playerData. Create component by invoking BaseballCard with player props
    <BaseballCard 
    name={player.name}
    team={player.team}
    position={player.position}
    stats={player.stats}
    imgUrl={player.imgUrl}
    cardId={player.cardId}
    />
  ));

  console.log(cards)
  // 7. Return cards component in fragment because cards is made up of multiple elements (cards is an array because .map() returns an array).
  return <>{cards}</>;
}

export default App;
