import { MoveProps } from '@/types/types';
import classNames from 'classnames';

type GameDisplayProps = { winner: string; move: MoveProps };

const GameDisplay: React.FC<GameDisplayProps> = ({ winner, move }) => {
  return (
    <div className="w-full h-[176px] lg:h-full flex items-center justify-between rounded-md bg-white p-0">
      <div className="w-full flex items-center justify-center text-9xl transform rotate-90 scale-x-[-1]">
        <label
          className={classNames({
            'bg-green-700/50 py-4 rounded-lg': winner === 'player2'
          })}
        >
          {move.player2.hand}
        </label>
      </div>

      <div className="w-full flex items-center justify-center text-9xl transform -rotate-90">
        <label
          className={classNames({
            'bg-green-700/50 py-4 rounded-lg': winner === 'player1'
          })}
        >
          {move.player1.hand}
        </label>
      </div>
    </div>
  );
};

export default GameDisplay;
