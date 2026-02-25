import { useState, useCallback } from 'react';

/**
 * 示例 Hook
 */
export const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((s) => !s), []);
  return [state, toggle];
};
