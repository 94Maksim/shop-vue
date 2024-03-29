export const validatorConfig = {
  email: {
    isRequired: {
      message: "Электронная почта обязательна для заполнения",
    },
    isEmail: {
      message: "Email введен некорректно",
    },
  },
  password: {
    isRequired: { message: "Пароль обязателен для заполнения" },
    isCapitalSymbol: {
      message: "Пароль должен содержать хотя бы одну заглавную букву",
    },
    isContainDigit: {
      message: "Пароль должен содержать хотя бы одну цифру",
    },
    min: {
      message: "Пароль должен состоять минимум из 8 символов",
      value: 8,
    },
  },
  passwordLogIn: {
    isRequired: { message: "Пароль обязателен для заполнения" },
  },
  firstName: {
    isRequired: {
      message: "Имя обязательно для заполнения",
    },
  },
  lastName: {
    isRequired: {
      message: "Фамилия обязательна для заполнения",
    },
  },
  username: {
    isRequired: {
      message: "Логин обязателен для заполнения",
    },
  },
  birthDate: {
    isRequired: {
      message: "Дата рождения обязательна для заполнения",
    },
  },
  gender: {
    isRequired: {
      message: "Выбирете пол",
    },
  },
  licence: {
    isRequired: {
      message:
        "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения",
    },
  },
  personalData: {
    isRequired: {
      message: "Подтвердите обработку персональных данных",
    },
  },
  phoneNumber: {
    isRequired: { message: "Телефон обязателен для заполнения" },
  },
};
