import { Grid } from '~/types/game';

export function createEmptyGrid(rows: number, cols: number): Grid {
  return Array(rows).fill(null).map(() => Array(cols).fill(0));
}

export function randomizeGrid(grid: Grid): Grid {
  return grid.map(row => row.map(() => Math.random() > 0.6 ? 1 : 0));
}

export function isGridEmpty(grid: Grid): boolean {
  return grid.every(row => row.every(col => col === 0));
}

export function countNeighbors(row: number, col: number, grid: Grid): number {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  let count = 0;
  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;

    //Inbound check
    if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
      count += grid[newRow][newCol] <= 0 ? 0 : 1;
    }
  }

  return count;
}

export function nextGeneration(grid: Grid): Grid {
  // Optimized Sol: Time Complexity: O(n*m)
  //                Space Complexity: O(1)

  {/*
      Approach: (Inplace solution)
      Iterate over the matrix and for each cell count the number of neighbours
      Now check if the cell is live(with 1 value) and it's neighbours count is < 2 or > 3 -> change cell value to 2(it indicates that it will be dead)
      And similarly for dead cell(cell with 0 value) and it's neighbours count is equal to 3 -> change cell value to -3(it indicates that it will become alive)

      Finally, iterate over the matrix and for each cell apply the condition: cell value is equal to 2 change it to 0 or if cell value is equal to -3 change it to 1.
  */}

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const liveNeighbors = countNeighbors(i, j, grid);

      // Applying Game of Life rules
      if (grid[i][j] === 1) {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          grid[i][j] = 2;
        }
      } else if (liveNeighbors === 3) {
        grid[i][j] = -3;
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === -3) {
        grid[i][j] = 1;
      } else if (grid[i][j] === 2) {
        grid[i][j] = 0;
      }
    }
  }

  return grid;
}