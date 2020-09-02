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

export function getErrorMessage(error) {
  const { type, ref } = error;
  const { name } = ref;
  let errorMessage = '';

  if (errorMessages[name][type]) errorMessage = errorMessages[name][type];
  else if (errorMessages.defaults[type]) errorMessage = errorMessages.defaults[type];
  else errorMessage = 'Erro no campo';

  return errorMessage;
};
