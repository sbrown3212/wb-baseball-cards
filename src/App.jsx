import playerData from "./playerData";

function BaseballCard({name, team, position, stats, imgUrl, cardId}) {
  // return (
  //   <div className="card">
  //     <h2>{name}</h2>
  //     <img src={imgUrl} alt="" />
  //   </div>
  // );
  const statsDisplay = [];

  for (const key in stats) {
    const element = <p>{key}: {stats[key]}</p>;
    statsDisplay.push(element);

    // Lab instructions solution:
    // const statsDisplay = Object.entries(props.stats).map(([statName, statValue]) => (
    //   <p key={statName}>
    //     {statName}: {statValue}
    //   </p>
    // ));
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{team}</p>
      <p>{position}</p>
      {statsDisplay}
    </div>
  )
}

const cards = playerData.map((player) => {
  return BaseballCard(player);
});

function App() {
  // console.log(cards)
  return <>{cards}</>;
}

export default App;
