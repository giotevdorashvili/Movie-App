import useAsyncStorage from './useAsyncStorage';

const useUpdateFavorites = (movieId: number) => {
  const [ids, setIds] = useAsyncStorage('favorites');

  const isMovieFavoreted = ids.some((id: number) => id === movieId);

  const onPress = async () => {
    try {
      let updatedIds;

      if (isMovieFavoreted) {
        updatedIds = ids.filter((id: number) => id !== movieId);
      } else {
        updatedIds = [...ids, movieId];
      }
      setIds(updatedIds);
    } catch (e) {
      console.log(e, '..............//////////');
    }
  };
  return {isMovieFavoreted, onPress};
};

export default useUpdateFavorites;
