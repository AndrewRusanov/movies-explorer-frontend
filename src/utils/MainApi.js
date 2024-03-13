const BASE_URL = 'https://api.movies-diploma.nomoredomainsmonster.ru/';

class MainApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  __getResponse = (response) => {
    return response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`);
  };

  register = (name, email, password) => {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this.__getResponse(res));
  };

  signin = (email, password) => {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this.__getResponse(res));
  };

  checkToken = (token) => {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this.__getResponse(res));
  };

  editUserInfo = (data, token) => {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: data.name, email: data.email }),
    }).then((res) => this.__getResponse(res));
  };

  getUserInfo = (token) => {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this.__getResponse(res));
  };

  getUserMovies = () => {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then(this.__getResponse);
  };

  saveMovie = (movie) => {
    console.log('В Запросе', movie);
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(movie),
    }).then(this.__getResponse);
  };

  deleteMovie = (movieId) => {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then(this.__getResponse);
  };
}

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
});
