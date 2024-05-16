'use client';

import useGame from '@/hooks/useGame';
import { hands } from '@/mocks/hands';
import classNames from 'classnames';
import { FaPerson, FaRobot } from 'react-icons/fa6';

const Home = () => {
  const { player, move, scoreboard, winner, handlePlay, gameReset } = useGame();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <section className="bg-red-400/0 flex flex-col w-full lg:w-1/3">
        <div className="grid grid-row-2 items-center text-3xl font-extrabold text-[#56BAEC] bg-white p-2 mb-4 rounded-md">
          <div className="flex justify-between items-center bg-slate-800/0">
            <div
              className={classNames(
                'w-1/3 flex flex-col justify-center items-center gap-4 rounded-md',
                {
                  'bg-[#56BAEC] text-white': player
                }
              )}
            >
              <FaRobot size={32} />
              <div
                className={classNames(
                  'w-1/3 flex justify-center items-center rounded-md',
                  {
                    'bg-[#56BAEC] text-white': !player
                  }
                )}
              >
                {scoreboard.player2}
              </div>
            </div>
            <div className="border border-[#56BAEC] py-10"></div>
            <div
              className={classNames(
                'w-1/3 flex flex-col justify-center items-center gap-4 rounded-md p-1',
                {
                  'bg-[#56BAEC] text-white': !player
                }
              )}
            >
              <FaPerson size={32} />
              <div
                className={classNames(
                  'w-1/3 flex justify-center items-center rounded-md',
                  {
                    'bg-[#56BAEC] text-white': player
                  }
                )}
              >
                {scoreboard.player1}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 lg:flex-row justify-between">
          <div className="w-full flex items-center justify-between rounded-md bg-white p-2 lg:p-0">
            <div
              className={classNames(
                'w-full flex items-center justify-center text-9xl transform rotate-90  scale-x-[-1]',
                { 'p-4': winner !== 'player2' }
              )}
            >
              <label
                className={classNames({
                  'bg-green-700/50 py-4 rounded-lg': winner === 'player2'
                })}
              >
                {move.player2.hand}
              </label>
            </div>
            <div
              className={classNames(
                'w-full flex items-center justify-center text-9xl -rotate-90 ',
                { 'p-4': winner !== 'player1' }
              )}
            >
              <label
                className={classNames({
                  'bg-green-700/50 py-4 rounded-lg': winner === 'player1'
                })}
              >
                {move.player1.hand}
              </label>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col justify-center items-center gap-2 bg-green-600/0 ">
            {hands.map(hand => (
              <button
                key={hand.id}
                onClick={() => {
                  handlePlay(hand);
                }}
                className="w-16 h-16 flex items-center justify-center border rounded-md text-4xl hover:scale-95 shadow shadow-purple-400 bg-purple-600"
              >
                {hand.hand}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center p-10 lg:p-4">
          <button
            onClick={gameReset}
            disabled={player}
            className={classNames(
              'px-10 py-3 bg-green-400 text-white font-semibold rounded-md shadow hover:scale-95',
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
