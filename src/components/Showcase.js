import "./Showcase.css";

function Showcase() {
  const favPokemon = "Entei";

  const pokeCharactersistics = {
    type: "Fire",
    move: "Vine Whip",
  };

  return (
    <div>
      <h1>{favPokemon} Showcase Component</h1>
      <h2>
        {favPokemon}'s type is
        <span className="type">{pokeCharactersistics.type}</span> and one of
        their moves is
        <span className="move">{pokeCharactersistics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
