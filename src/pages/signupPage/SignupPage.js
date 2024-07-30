import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { StyledInput, StyledInputContainer, StyledTitle, TitleContainer } from "./SignupPageStyles";
import { GoToLogin } from "../../router/Coordinator";
import { validateEmail, validateName, validatePassword } from './validation';

export const SignupPage = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [formError, setFormError] = useState("");

  const changeForm = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    if (name === "email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(value),
      }));
    } else if (name === "password") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: validatePassword(value),
      }));
    } else if (name === "name") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: validateName(value),
      }));
    }

  };

  const signup = async (event) => {
    event.preventDefault();
    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);
    const nameError = validateName(form.name);

    if (emailError || passwordError || nameError) {
      setErrors({
        email: emailError,
        password: passwordError,
        name: nameError
      });
      setFormError("Por favor, corrija os erros acima.");
      return;
    }

    setFormError("");
    
    try {
      setIsLoading(true);

      // const body = {
      //   name: form.name,
      //   email: form.email,
      //   password: form.password
      // };

      // const response = await axios.post(BASE_URL + "/signup", body);
      // window.localStorage.setItem(TOKEN_NAME, response.data.token);
      alert('ok')
      setIsLoading(false);
      GoToLogin(navigate);
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data);
      if (error.response && error.response.data) {
        setFormError(error.response.data.message || "Ocorreu um erro ao enviar o formulário.");
      } else {
        setFormError("Ocorreu um erro inesperado. Tente novamente.");
      }
    }
  };

  return (
    <>
      <button onClick={() => GoToLogin(navigate)} buttonName="Entrar" />
      <TitleContainer>
        <StyledTitle>blabla</StyledTitle>
      </TitleContainer>
      <StyledInputContainer onSubmit={signup} autoComplete="off">
        <StyledInput
        name={"name"}
        type="text"
        placeholder="Nome"
        value = {form.name}
        onChange={changeForm}
        pattern="^[A-Za-zÀ-ÿ\s\-']{2,50}$"
        title="O nome deve conter entre 2 e 50 caracteres e pode incluir letras, espaços, hífens e apóstrofos."
        required
        />
        <StyledInput 
        name={"email"}
        type="email"
        placeholder="E-mail"
        value = {form.email}
        onChange={changeForm}
        required
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        title="Digite um e-mail válido (exemplo: usuario@dominio.com)"
        />
        <StyledInput
        name={"password"}
        type="password"
        placeholder="Senha"
        value={form.password}
        onChange={changeForm}
        minLength={8}
        required
        pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}'
        title='A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.'
        />
         {(formError || errors.email || errors.password) && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            {formError || errors.email || errors.password}
          </div>
        )}
        <button type = "submit" disabled={isLoading}>Cadastrar</button>
      </StyledInputContainer>
    </>
  );
};