import { GameGrid, Navbar, Scores } from "./game-parts"

const GameSection = () => {
  return (
    <section className="w-full max-w-[632px] mx-auto grid gap-y-[50px] gap-x-[20px] z-10 desktop:grid-cols-mainGameGrid desktop:max-w-[1043px]">
      <Navbar />
      <Scores />
      <GameGrid />
    </section>
  )
}

export default GameSection