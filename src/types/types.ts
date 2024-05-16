export type HandProps = {
  id: number;
  hand: string;
};

export type MoveProps = {
  player1: {
    id: number;
    hand: string;
  };
  player2: {
    id: number;
    hand: string;
  };
};

export type PlacarProps = {
  player1: number;
  player2: number;
};
