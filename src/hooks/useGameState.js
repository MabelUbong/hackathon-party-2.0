// src/hooks/useGameState.js
import { create } from 'zustand';

const useGameState = create((set) => ({
  score: 0,
  lives: 3,
  level: 1,
  setScore: (score) => set({ score }),
  setLives: (lives) => set({ lives }),
  setLevel: (level) => set({ level }),
  resetGame: () => set({ score: 0, lives: 3, level: 1 }),
}));

export default useGameState;
