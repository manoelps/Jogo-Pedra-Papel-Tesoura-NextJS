import { getRadomNumber } from '@/helpers/helper';
import { hands } from '@/mocks/hands';
import { HandProps, MoveProps, PlacarProps } from '@/types/types';
import { useEffect, useState } from 'react';

const useGame = () => {
  const [winner, setWinner] = useState<string>('');
  const [player, setPlayer] = useState<boolean>(false);
  const [move, setMove] = useState<MoveProps>({
    player1: {
      id: 0,
      hand: ''
    },
    player2: {
      id: 0,
      hand: ''
    }
  });
  const [scoreboard, setScoreboard] = useState<PlacarProps>({
    player1: 0,
    player2: 0
  });

  const handlePlay = (play: HandProps) => {
    setPlayer(prevPlayer => !prevPlayer);

    if (!player) {
      setMove({
        player1: {
          id: play.id,
          hand: play.hand
        },
        player2: {
          id: 1,
          hand: ''
        }
      });
      setWinner('');
    } else {
      setMove(prevMove => ({
        ...prevMove,
        player2: {
          id: play.id,
          hand: play.hand
        }
      }));
    }
  };

  const iaPlayer = () => {
    if (player) {
      setTimeout(() => {
        const positionHand = getRadomNumber(3);
        handlePlay(hands[positionHand]);
        checkWinner(positionHand);
      }, 700);
    }
  };

  const checkWinner = (positionHand: number) => {
    if (
      move.player1.id !== hands[positionHand].id &&
      move.player1.id !== 0 &&
      hands[positionHand].id !== 0
    ) {
      if (hands[positionHand].id === 1 && move.player1.id === 3) {
        updateScore('player2');
      } else if (hands[positionHand].id === 3 && move.player1.id === 2) {
        updateScore('player2');
      } else if (hands[positionHand].id === 2 && move.player1.id === 1) {
        updateScore('player2');
      } else if (move.player1.id === 1 && hands[positionHand].id === 3) {
        updateScore('player1');
      } else if (move.player1.id === 3 && hands[positionHand].id === 2) {
        updateScore('player1');
      } else if (move.player1.id === 2 && hands[positionHand].id === 1) {
        updateScore('player1');
      }
    } else {
      setWinner('');
    }
  };

  const updateScore = (player: 'player1' | 'player2') => {
    setWinner(player);
    setScoreboard(prevState => ({
      ...prevState,
      [player]: prevState[player] + 1
    }));
  };

  const gameReset = () => {
    setPlayer(false);
    setMove({
      player1: {
        id: 0,
        hand: ''
      },
      player2: {
        id: 0,
        hand: ''
      }
    });
    setScoreboard({
      player1: 0,
      player2: 0
    });
    setWinner('');
  };

  useEffect(() => {
    iaPlayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player]);

  return {
    player,
    move,
    scoreboard,
    winner,
    handlePlay,
    gameReset
  };
};

export default useGame;
