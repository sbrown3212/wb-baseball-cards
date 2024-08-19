import playerData from "./playerData";

function BaseballCard({name, team, position, stats, imgUrl, cardId}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={imgUrl} alt="" />
    </div>
  );
}

const cards = playerData.map((player) => {
  return BaseballCard(player);
});

function App() {
  console.log(cards)
  return <>{cards}</>;
}

export default App;
