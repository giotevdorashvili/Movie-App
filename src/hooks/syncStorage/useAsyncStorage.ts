import {useEffect, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {MovieDetailTypes, SingleMovie} from '../services/types';

export const useAsyncStorage = (
  key: string,
): [
  (MovieDetailTypes | SingleMovie)[],
  (value: MovieDetailTypes[]) => void,
] => {
  const [storedValue, setStoredValue] = useState<
    (MovieDetailTypes | SingleMovie)[]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        const value = item ? JSON.parse(item) : [];

        setStoredValue(value);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [key]);

  const setValue = useCallback(
    async (value: (MovieDetailTypes | SingleMovie)[]) => {
      try {
        setStoredValue(value);
        await AsyncStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    },
    [key],
  );

  return [storedValue, setValue];
};

export default useAsyncStorage;
