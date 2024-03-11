const BASE_URL = "https://api.rusanov.nomoredomainsmonster.ru";

class MainApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  __getResponse = (response) => {
    return response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`);
  };

  register = (name, password, email) => {
    return fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this.__getResponse(res));
  };

  signin = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this.__getResponse(res));
  };
}

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
});
