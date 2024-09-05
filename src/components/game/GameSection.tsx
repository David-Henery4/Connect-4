import { GameGrid, Navbar, Scores, Timer } from "./game-parts"

const GameSection = () => {
  return (
    <section className="w-full grid gap-y-[50px] gap-x-[20px] z-10">
      <Navbar />
      <Scores />
      <GameGrid />
      <Timer />
    </section>
  )
}

export default GameSection