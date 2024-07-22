import React from 'react';

interface GameControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onRandomize: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({
  isRunning,
  onStart,
  onStop,
  onReset,
  onRandomize,
}) => {
  return (
    <div className="flex space-x-2 mt-4">
      {isRunning ? (
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors shadow-md"
          onClick={onStop}
        >
          Stop
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors shadow-md"
          onClick={onStart}
        >
          Start
        </button>
      )}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors shadow-md"
        onClick={onReset}
      >
        Reset
      </button>
      <button
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors shadow-md"
        onClick={onRandomize}
      >
        Randomize
      </button>
    </div>
  );
};

export default GameControls;