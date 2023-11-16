export const getOptions = (listName: string) => {
  return {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${listName}?api_key=667038ddd2f7ddacc73fd59a56c8c22d`,
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
    },
  };
};
