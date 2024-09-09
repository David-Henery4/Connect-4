"use client";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from "react";

interface GlobalContextType {
  gameStarted: boolean;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
  handleQuit: () => void;
  currentPlayer: {
    playerId: number;
    isCurrentTurn: boolean;
    score: number;
  };
  setCurrentPlayer: Dispatch<SetStateAction<{
    playerId: number;
    isCurrentTurn: boolean;
    score: number;
  }>>;
}

const AppContext = createContext<GlobalContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);
  const [numberOfGames, setNumberOfGames] = useState(0);
  const [gameTimer, setGameTimer] = useState(30);
  // Might have current turn as separate state
  const [currentPlayer, setCurrentPlayer] = useState({
    playerId: 1,
    isCurrentTurn: true,
    score: 0,
  });
  //
  const [playerInfo, setPlayerInfo] = useState({
    player1: {
      playerId: 1,
      isCurrentTurn: true,
      score: 0,
    },
    player2: {
      playerId: 2,
      isCurrentTurn: false,
      score: 0,
    },
  });
  //
  const handleGameTimer = () => {
    setGameTimer(gameTimer - 1);
  };
  //
  const handleTurnSwitch = () => {
    setPlayerInfo((previousPlayersInfo) => {
      return {
        player1: {
          ...previousPlayersInfo.player1,
          isCurrentTurn: !previousPlayersInfo.player1.isCurrentTurn,
        },
        player2: {
          ...previousPlayersInfo.player2,
          isCurrentTurn: !previousPlayersInfo.player2.isCurrentTurn,
        },
      };
    });
  };
  //
  const handleScoreUpdate = (player: "player1" | "player2") => {
    setPlayerInfo((previousPlayersInfo) => {
      return {
        ...previousPlayersInfo,
        [player]: {
          ...previousPlayersInfo[player],
          score: previousPlayersInfo[player].score + 1,
        },
      };
    });
  };
  //
  const handleWin = () => {
    handleTurnSwitch();
  };
  //
  const handlePause = () => {
    setGamePaused(!gamePaused);
  };
  //
  const handleGameRestart = () => {
    setGameStarted(false);
    setGamePaused(false);
    setGameTimer(30);
    setPlayerInfo({
      player1: {
        playerId: 1,
        isCurrentTurn: true,
        score: 0,
      },
      player2: {
        playerId: 2,
        isCurrentTurn: false,
        score: 0,
      },
    });
    //
    setNumberOfGames(0); // might have to depend on if going back to main menu or just restarting the game
  };
  //
  const handleQuit = () => {
    setGameStarted(false);
  };
  //
  useEffect(() => {
    // Each player has 30 seconds to take their turn.
    // If the timer runs out, the other player wins.
    const interval = setInterval(() => {
      handleGameTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, [gameTimer]);
  //
  return (
    <AppContext.Provider value={{ gameStarted, setGameStarted, handleQuit, currentPlayer, setCurrentPlayer }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
