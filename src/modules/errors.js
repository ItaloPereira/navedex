export const errorMessages = {
  email: {
    required: 'E-mail obrigatório',
    pattern: 'E-mail inválido'
  },
  password: {
    required: 'Senha obrigatória',
  },
  defaults: {
    required: 'Campo obrigatório',
  },
};

export const requestErrorMessages = {
  400: 'Bad Request. Your browser sent a request that this server could not understand.',
  401: 'Authorization Required',
  500: 'Internal Server Error',
};

export function getErrorMessage(error) {
  const { type, ref } = error;
  const { name } = ref;
  let errorMessage = '';

  if (errorMessages[name][type]) errorMessage = errorMessages[name][type];
  else if (errorMessages.defaults[type]) errorMessage = errorMessages.defaults[type];
  else errorMessage = 'Erro no campo';

  return errorMessage;
};

export function getErrorMessageByRequest(error) {
  const { response } = error;
  const { status, data } = response;
  const { message } = data;

  if (message) return message;

  return requestErrorMessages[status];
}
