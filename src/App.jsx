import playerData from "./playerData";

function BaseballCard(props) {
  return (
    <div className="card">
      <h2>Player Name goes here</h2>
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
