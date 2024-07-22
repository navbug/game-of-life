import React from 'react';
import { Grid } from '~/types/game';

interface GameGridProps {
  grid: Grid;
  onCellClick: (x: number, y: number) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ grid, onCellClick }) => {
  return (
    <div className="grid gap-[1.5px] bg-slate-200 p-[2px] rounded-sm shadow-lg">
      {grid.map((row, x) => (
        <div key={x} className="flex gap-[1.5px]">
          {row.map((cell, y) => (
            <div
              key={`${x}-${y}`}
              className={`w-3 h-3 transition-all duration-300 rounded-sm ${
                cell ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-white hover:bg-gray-100'
              }`}
              onClick={() => onCellClick(x, y)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameGrid;