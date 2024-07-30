
export const validateName = (name) => {
  if (!name) {
    return 'Por favor, insira um nome.';
  } else if (!/^[A-Za-zÀ-ÿ\s\-']{2,50}$/.test(name)) {
    return 'O nome deve conter entre 2 e 50 caracteres e pode incluir letras, espaços, hífens e apóstrofos.';
  }
  return '';
};

export const validateEmail = (email) => {
    if (!email) {
      return 'Por favor, insira um endereço de email.';
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/
  .test(email)) {
      return 'Por favor, insira um endereço de email válido.';
    }
    return '';
  };
  
  export const validatePassword = (password) => {
    if (!password) {
      return 'Por favor, insira uma senha.';
    } else if (password.length < 8) {
      return 'A senha deve ter pelo menos 8 caracteres.';
    } else if (!/(?=.*[A-Z])/.test(password)) {
      return 'A senha deve conter pelo menos uma letra maiúscula.';
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return 'A senha deve conter pelo menos um caractere especial.';
    }
    return '';
  };
  