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
  setCurrentPlayer: Dispatch<
    SetStateAction<{
      playerId: number;
      isCurrentTurn: boolean;
      score: number;
    }>
  >;
  gamePaused: boolean;
  setGamePaused: Dispatch<SetStateAction<boolean>>;
  gameTimer: number;
  playerInfo: {
    player1: {
      playerId: number;
      isCurrentTurn: boolean;
      score: number;
    };
    player2: {
      playerId: number;
      isCurrentTurn: boolean;
      score: number;
    };
  };
  setPlayerInfo: Dispatch<
    SetStateAction<{
      player1: {
        playerId: number;
        isCurrentTurn: boolean;
        score: number;
      };
      player2: {
        playerId: number;
        isCurrentTurn: boolean;
        score: number;
      };
    }>
  >;
  setHasRoundStarted: Dispatch<SetStateAction<boolean>>;
  hasRoundStarted: boolean;
  roundWinner: {
    playerId: number;
    isCurrentTurn: boolean;
    score: number;
  } | null;
  handlePlayAgain: () => void;
}

const AppContext = createContext<GlobalContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  // "gameStarted" will only be used to start the initial game and navigate from main menu to game screen
  const [gameStarted, setGameStarted] = useState(false);
  const [hasRoundStarted, setHasRoundStarted] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [gameTimer, setGameTimer] = useState(30);
  // Might have current turn as separate state
  const [currentPlayer, setCurrentPlayer] = useState({
    playerId: 1,
    isCurrentTurn: true,
    score: 0,
  });
  const [roundWinner, setRoundWinner] = useState<{
    playerId: number;
    isCurrentTurn: boolean;
    score: number;
  } | null>(null);
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
  // const handlePause = () => {
  //   setGamePaused(!gamePaused);
  // };
  //
  const handleGameRestart = () => {
    setHasRoundStarted(true);
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
    setNumberOfRounds(0); // might have to depend on if going back to main menu or just restarting the game
  };
  //
  const handleQuit = () => {
    setGameStarted(false);
    setHasRoundStarted(false);
    setGamePaused(false);
    setGameTimer(30);
  };
  //
  const timedOutRound = () => {
    setHasRoundStarted(false);
    if (playerInfo.player1.isCurrentTurn) {
      handleScoreUpdate("player2");
      setRoundWinner({
        playerId: 2,
        isCurrentTurn: false,
        score: playerInfo.player2.score,
      });
    } else {
      handleScoreUpdate("player1");
      setRoundWinner({
        playerId: 1,
        isCurrentTurn: false,
        score: playerInfo.player1.score,
      });
    }
  };
  //
  const handlePlayAgain = () => {
    if (playerInfo.player1.isCurrentTurn) {
      setCurrentPlayer({
        playerId: 2,
        isCurrentTurn: true,
        score: playerInfo.player2.score,
      });
    } else {
      setCurrentPlayer({
        playerId: 1,
        isCurrentTurn: true,
        score: playerInfo.player1.score,
      });
    }
    setNumberOfRounds(numberOfRounds + 1);
    setHasRoundStarted(true);
    handleTurnSwitch();
    setGameTimer(30);
  };
  //
  useEffect(() => {
    // Each player has 30 seconds to take their turn.
    // If the timer runs out, the other player wins.
    if (hasRoundStarted) {
      // Might have to change to "roundStarted" or finished
      if (gameTimer === 0) {
        timedOutRound();
        return;
      }
      const interval = setInterval(() => {
        if (!gamePaused) {
          handleGameTimer();
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameTimer, gamePaused, hasRoundStarted]);
  //
  useEffect(() => {
    if (gameStarted) {
      setHasRoundStarted(true);
    }
  }, [gameStarted]);
  //
  return (
    <AppContext.Provider
      value={{
        gameStarted,
        setGameStarted,
        handleQuit,
        currentPlayer,
        setCurrentPlayer,
        gamePaused,
        setGamePaused,
        gameTimer,
        playerInfo,
        setPlayerInfo,
        setHasRoundStarted,
        hasRoundStarted,
        roundWinner,
        handlePlayAgain
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
