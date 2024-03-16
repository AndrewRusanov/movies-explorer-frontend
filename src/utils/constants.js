const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const mapErrorsToMessage = {
  'Ошибка: 400': 'Неверно заполнено одно из полей',
  'Ошибка: 401': 'Неверный логин или пароль',
  'Ошибка: 403': 'Токен не передан или передан в неверном формате',
  'Ошибка: 404': 'Данные не найдены',
  'Ошибка: 409': 'Пользователь с таким email уже существует',
  'Ошибка: 500': 'Произошла ошибка сервера',
};

const mapWidthToParams = {
  desktop: { width: 1280, movies: { total: 16, more: 4 } },
  tablet: { width: 768, movies: { total: 8, more: 2 } },
  mobile: { width: 320, movies: { total: 4, more: 1 } },
};

const MAX_SHORTS_DURATION = 40;

const MOVIES_URL_ADDRESS = 'https://api.nomoreparties.co';

export {
  emailRegex,
  mapWidthToParams,
  mapErrorsToMessage,
  MAX_SHORTS_DURATION,
  MOVIES_URL_ADDRESS,
};
