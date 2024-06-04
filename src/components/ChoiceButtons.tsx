import { hands } from '@/mocks/hands';
import { HandProps } from '@/types/types';

type ChoiceButtonsProps = {
  handlePlay: (play: HandProps) => void;
};

const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({ handlePlay }) => {
  return (
    <div className="flex flex-row lg:flex-col justify-center items-center gap-2">
      {hands.map(hand => (
        <button
          key={hand.id}
          onClick={() => {
            handlePlay(hand);
          }}
          className="w-16 h-16 lg:w-14 lg:h-14 flex items-center justify-center border rounded-md text-4xl hover:scale-95 active:scale-90 shadow shadow-purple-400 bg-purple-600"
        >
          {hand.hand}
        </button>
      ))}
    </div>
  );
};

export default ChoiceButtons;
