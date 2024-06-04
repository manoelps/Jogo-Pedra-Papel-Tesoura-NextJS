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
      hand: '',
      choice: ''
    },
    player2: {
      id: 0,
      hand: '',
      choice: ''
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
          hand: play.hand,
          choice: play.choice
        },
        player2: {
          id: 1,
          hand: '',
          choice: ''
        }
      });
      setWinner('');
    } else {
      setMove(prevMove => ({
        ...prevMove,
        player2: {
          id: play.id,
          hand: play.hand,
          choice: play.choice
        }
      }));
    }
  };

  const iaPlayer = () => {
    if (player) {
      setTimeout(() => {
        const positionHand = getRadomNumber(3);
        handlePlay(hands[positionHand]);
        checkWinner(move.player1.choice, hands[positionHand].choice);
      }, 700);
    }
  };

  const checkWinner = (playerChoice: string, computerChoice: string) => {
    if (playerChoice === computerChoice) {
      setWinner('');
    } else {
      if (
        (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')
      ) {
        updateScore('player1');
      } else {
        updateScore('player2');
      }
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
        hand: '',
        choice: ''
      },
      player2: {
        id: 0,
        hand: '',
        choice: ''
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
