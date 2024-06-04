'use client';

import ChoiceButtons from '@/components/ChoiceButtons';
import GameDisplay from '@/components/GameDisplay';
import Scoreboard from '@/components/Scoreboard';
import useGame from '@/hooks/useGame';
import classNames from 'classnames';

const Home = () => {
  const { player, move, scoreboard, winner, handlePlay, gameReset } = useGame();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <section className="flex flex-col w-full lg:w-[445px]">
        <Scoreboard player={player} scoreboard={scoreboard} />

        <div className="w-full flex flex-col gap-4 lg:flex-row lg:justify-between">
          <GameDisplay move={move} winner={winner} />
          <ChoiceButtons handlePlay={handlePlay} />
        </div>
        <div className="flex items-center justify-center p-10 lg:p-4">
          <button
            onClick={gameReset}
            disabled={player}
            className={classNames(
              'px-10 py-3 bg-green-400 text-white font-semibold rounded-md hover:bg-green-400/80 active:scale-95 shadow',
              {
                'cursor-not-allowed': player
              }
            )}
          >
            RECOMEÇAR
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
