const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const moviesCardList = [
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
];

const savedMoviesCardList = [
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
  { title: "33 cлова о дизайне", duration: "1ч42м" },
];

const mapErrorsToMessage = {
  'Ошибка: 400': 'Неверно заполнено одно из полей',
  'Ошибка: 401': 'Неверный логин или пароль',
  'Ошибка: 403': 'Токен не передан или передан в неверном формате',
  'Ошибка: 404': 'Данные не найдены',
  'Ошибка: 409': 'Пользователь с таким email уже существует',
  'Ошибка: 500': 'Произошла ошибка сервера'
}

const mapWidthToParams = {
  desktop: { width: 1280, movies: { total: 16, more: 4 } },
  tablet: { width: 768, movies: { total: 8, more: 2 } },
  mobile: { width: 320, movies: { total: 4, more: 1 } },
};

export { emailRegex, moviesCardList, savedMoviesCardList, mapWidthToParams, mapErrorsToMessage };
