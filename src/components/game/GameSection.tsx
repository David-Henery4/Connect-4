import { GameGrid, Navbar, Scores, Timer } from "./game-parts"

const GameSection = () => {
  return (
    <section className="w-full">
      <Navbar />
      <Scores />
      <GameGrid />
      <Timer />
    </section>
  )
}

export default GameSection