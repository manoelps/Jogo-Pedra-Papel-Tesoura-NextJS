import { PlacarProps } from '@/types/types';
import classNames from 'classnames';
import { FaPerson, FaRobot } from 'react-icons/fa6';

type Props = {
  player: boolean;
  scoreboard: PlacarProps;
};

const Scoreboard: React.FC<Props> = ({ player, scoreboard }) => {
  return (
    <div className="grid grid-row-2 items-center text-3xl font-extrabold text-[#56BAEC] bg-white p-2 mb-4 rounded-md">
      <div className="flex justify-between items-center">
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
  );
};

export default Scoreboard;
