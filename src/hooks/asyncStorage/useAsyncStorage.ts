import {useEffect, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type MovieIds = number[];

export const useAsyncStorage = (
  key: string,
): [MovieIds, (value: MovieIds) => void] => {
  const [storedValue, setStoredValue] = useState<MovieIds>([]);

  useEffect(() => {
    (async () => {
      try {
        const item = await AsyncStorage.getItem(key);

        if (item) {
          setStoredValue(JSON.parse(item));
        }
      } catch (error) {
        console.log(error, '-------error in useAsyncStorage');
      }
    })();
  }, [key]);

  const setValue = useCallback(
    async (value: MovieIds) => {
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
