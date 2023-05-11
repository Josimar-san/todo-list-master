import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [player, setPlayer] = useState<any>({
    name: "Caio",
    nickName: "maqueise",
    score: 10,
  });

  const handleCLick = () => {
    const newScore = player.score + 1
    setPlayer({...player,score:newScore})
  };
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value

    setPlayer({...player,name:newName})
  };
  const handleChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    const newNickName = event.target.value

    setPlayer({...player,nickName:newNickName})
  };

  return (
    <>
      <h1>Imutabilidade</h1>

      <h2>Dados do Jogador</h2>
      <p>
        <h3>Score:{player.score}</h3>
        <button onClick={handleCLick}>+</button>
      </p>
      <p>
        <label>
          Player Name:
          <input
            type='text'
            name='name'
            onChange={handleChangeName}
            value={player.name}
          />
        </label>
      </p>
      <p>
        <label>
          Player NickName:
          <input
            type='text'
            name='nickName'
            onChange={handleChangeNickName}
            value={player.nickName}
          />
        </label>
      </p>
      <hr />
      <h3>
        {" "}
        {player.name} | {player.nickName}{" "}
      </h3>
    </>
  );
}

export default App;
