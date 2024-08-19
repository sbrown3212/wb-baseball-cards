import playerData from "./playerData";
import { useState } from "react";

function BaseballCard({name, team, position, stats, imgUrl, cardId}) {
  let [showPicture, setShowPicture] = useState(true);

  const toggleCard = () => setShowPicture(!showPicture);

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

const cards = playerData.map((player) => {
  // console.log(player)
  return <BaseballCard 
    name={player.name}
    team={player.team}
    position={player.position}
    stats={player.stats}
    imgUrl={player.imgUrl}
    cardId={player.cardId}
  />;
});

function App() {
  return <>{cards}</>;
}

export default App;
