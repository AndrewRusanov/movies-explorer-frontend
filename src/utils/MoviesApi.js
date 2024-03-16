const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

class MoviesApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  __getResponse = (response) => {
    return response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`);
  };

  getMovies = () => {
    return fetch(`${this.baseUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this.__getResponse);
  };
}

export const moviesApi = new MoviesApi({
  baseUrl: BASE_URL,
});
