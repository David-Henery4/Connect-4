"use client";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from "react";
import columns from "@/local-data/columnData";

interface ColumnRowTypes {
  column: string;
  counterOwner: number;
  rowValue: number;
  columnValue: number;
}

interface ColumnsTypes {
  columnLetter: string;
  columnRows: ColumnRowTypes[];
}

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
  handleGameRestart: () => void;
  handleTurn: () => void;
  handleColumnClick: (columnLetter: string) => void;
  gameColumns: ColumnsTypes[];
}

const AppContext = createContext<GlobalContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [hasRoundStarted, setHasRoundStarted] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [gameTimer, setGameTimer] = useState(30);
  const [gameColumns, setGameColumns] = useState<ColumnsTypes[]>(columns);
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
  //***************************************************//
  const handleGameTimer = () => {
    setGameTimer(gameTimer - 1);
  };
  //
  const handleColumnClick = (columnLetter: string) => {
    setGameColumns((previousValues) => {
      const newColumns = previousValues.map((col, i) => {
        if (col.columnLetter === columnLetter) {
          return {
            ...col,
            columnRows: [
              ...col.columnRows,
              {
                column: columnLetter,
                counterOwner: currentPlayer.playerId,
                rowValue: col.columnRows.length + 1,
                columnValue: i + 1,
              },
            ],
          };
        }
        return col;
      });
      return newColumns;
    });
    handleTurn();
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
  const handleTurn = () => {
    handleTurnSwitch();
    setGameTimer(30);
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
  const handleGameRestart = () => {
    setHasRoundStarted(true);
    //
    handleRoundReset();
  };
  //
  const handleQuit = () => {
    setGameStarted(false);
    setHasRoundStarted(false);
    //
    handleRoundReset();
  };
  //
  const handleRoundReset = () => {
    setGamePaused(false);
    setGameTimer(30);
    setNumberOfRounds(0);
    setRoundWinner(null);
    setGameColumns(columns);
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
    setCurrentPlayer({
      playerId: 1,
      isCurrentTurn: true,
      score: 0,
    });
  };
  //
  const timedOutRound = () => {
    setHasRoundStarted(false);
    if (playerInfo.player1.isCurrentTurn) {
      handleScoreUpdate("player2");
      setRoundWinner({
        playerId: 2,
        isCurrentTurn: false,
        score: playerInfo.player2.score + 1,
      });
    } else {
      handleScoreUpdate("player1");
      setRoundWinner({
        playerId: 1,
        isCurrentTurn: false,
        score: playerInfo.player1.score + 1,
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
    setGameColumns(columns);
    setNumberOfRounds(numberOfRounds + 1);
    setHasRoundStarted(true);
    handleTurnSwitch();
    setGameTimer(30);
    setRoundWinner(null);
  };
  //
  const isConsecutive = (values: number[]): boolean => {
    if (values.length < 4) return false;
    values.sort((a, b) => a - b);
    //
    let count = 1;
    //
    for (let index = 1; index < values.length; index++) {
      //
      if (values[index] === values[index - 1] + 1) {
        count++;
        if (count === 4) return true;
      } else {
        count = 1;
      }
    }
    //
    return false;
  };
  //
  const handleCheckWin = () => {
    let allPlacedCounters: ColumnRowTypes[] = [];
    //
    let playerOneCounters: ColumnRowTypes[] = [];
    let playerTwoCounters: ColumnRowTypes[] = [];
    //
    gameColumns.map((col) => {
      allPlacedCounters.push(...col.columnRows);
    });

    allPlacedCounters.map((counterValue) => {
      counterValue?.counterOwner === 1
        ? playerOneCounters.push(counterValue)
        : playerTwoCounters.push(counterValue);
    });

    // Check Player One
    const playerOneVertCheck = handleVerticalWinCheck(playerOneCounters);
    const playerOneHoriCheck = handleHorizontalWinCheck(playerOneCounters);
    const playerOneDiagCheck = handleDiagonalWinCheck(playerOneCounters);

    // Check Player Two
    const playerTwoVertCheck = handleVerticalWinCheck(playerTwoCounters);
    const playerTwoHoriCheck = handleHorizontalWinCheck(playerTwoCounters);
    const playerTwoDiagCheck = handleDiagonalWinCheck(playerTwoCounters);

    if (playerOneDiagCheck || playerOneHoriCheck || playerOneVertCheck) {
      handleScoreUpdate("player1");
      setHasRoundStarted(false);
      setRoundWinner({
        isCurrentTurn: true,
        playerId: 1,
        score: playerInfo.player1.score, // might have to add "+ 1"
      });
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
      handleTurnSwitch()
      return;
    }
    if (playerTwoDiagCheck || playerTwoHoriCheck || playerTwoVertCheck) {
      handleScoreUpdate("player2");
      setHasRoundStarted(false);
      setRoundWinner({
        isCurrentTurn: true,
        playerId: 2,
        score: playerInfo.player2.score, // might have to add "+ 1"
      });
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
      handleTurnSwitch()
      return;
    }
    setRoundWinner(null);
  };
  //
  const handleVerticalWinCheck = (
    playerCounterList: ColumnRowTypes[]
  ): boolean => {
    // Group by columnValue for vertical checks
    const columnsMap = new Map<number, number[]>();
    playerCounterList.forEach(({ rowValue, columnValue }) => {
      if (!columnsMap.has(columnValue)) {
        columnsMap.set(columnValue, []);
      }
      columnsMap.get(columnValue)!.push(rowValue);
    });
    // Check vertical win
    for (const rows of columnsMap.values()) {
      if (isConsecutive(rows)) return true;
    }
    return false;
  };
  //
  const handleHorizontalWinCheck = (
    playerCounterList: ColumnRowTypes[]
  ): boolean => {
    // Group by rowValue for horizontal checks
    const rowsMap = new Map<number, number[]>();
    playerCounterList.forEach(({ rowValue, columnValue }) => {
      if (!rowsMap.has(rowValue)) {
        rowsMap.set(rowValue, []);
      }
      rowsMap.get(rowValue)!.push(columnValue);
    });
    // Check horizontal win
    for (const columns of rowsMap.values()) {
      if (isConsecutive(columns)) return true;
    }
    return false;
  };
  //
  const handleDiagonalWinCheck = (
    playerCounterList: ColumnRowTypes[]
  ): boolean => {
    // Check diagonals
    const diagonals1 = new Map<number, number[]>(); // bottom-left to top-right
    const diagonals2 = new Map<number, number[]>(); // bottom-right to top-left

    playerCounterList.forEach(({ rowValue, columnValue }) => {
      const diag1Key = rowValue - columnValue;
      const diag2Key = rowValue + columnValue;

      if (!diagonals1.has(diag1Key)) {
        diagonals1.set(diag1Key, []);
      }
      diagonals1.get(diag1Key)!.push(rowValue);

      if (!diagonals2.has(diag2Key)) {
        diagonals2.set(diag2Key, []);
      }
      diagonals2.get(diag2Key)!.push(rowValue);
    });

    // Check diagonal wins
    for (const diagonal of diagonals1.values()) {
      if (isConsecutive(diagonal)) return true;
    }
    for (const diagonal of diagonals2.values()) {
      if (isConsecutive(diagonal)) return true;
    }
    return false;
  };
  //
  useEffect(() => {
    handleCheckWin();
  }, [gameColumns]);
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
        handlePlayAgain,
        handleGameRestart,
        handleTurn,
        handleColumnClick,
        gameColumns,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
