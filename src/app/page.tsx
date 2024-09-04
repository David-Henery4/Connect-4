"use client";
import { MainMenuCard } from "@/components/cards";
import GameSection from "@/components/game/GameSection";
import { useState } from "react";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  //
  return (
    <main
      className={`relative w-full px-5 grid place-items-center min-h-[100svh] ${
        gameStarted ? "bg-secondary" : "bg-secondary smTablet:bg-primary"
      }`}
    >
      {!gameStarted ? (
        <MainMenuCard setGameStarted={setGameStarted} />
      ) : (
        <GameSection />
      )}
      {gameStarted && (
        <div className="absolute bottom-0 left-0 w-full h-[200px] rounded-t-[60px] bg-primary"></div>
      )}
    </main>
  );
}
