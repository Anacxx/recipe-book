import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginImg from '../../assets/loginImg.jpg';
import { goToRecipes, GoToSignup } from '../../router/Coordinator';
import {
  StyledInput,
  StyledForm,
  StyledButton,
  StyledDiv,
  GradientLineLogin,
  FormContainer,
  FormGroup,
  PasswordInputContainer,
  SubmitButton
} from './LoginPageStyles';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changeForm = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const Login = async (event) => {
    event.preventDefault();
      try {
        setIsLoading(true);
        // const body = {
        //   email: form.email,
        //   password: form.password
        // };
        // const response = await axios.post(`${BASE_URL}/login`, body);
        // const authToken = response.data.token;
        // window.localStorage.setItem(TOKEN_NAME, authToken);
        alert('Ok')
        setIsLoading(false);
        goToRecipes(navigate);
      } catch (error) {
        setIsLoading(false);
        if (error?.response?.data) {
          
        } else {
        
        }
      }
    }
    return (
      <>
        <div>
          <img src={LoginImg} alt="Imagem de comida" />
        </div>
        <FormContainer>
          <h2>Entre na sua conta</h2>
          <StyledForm onSubmit={Login} autoComplete="off">
            <FormGroup>
              <label htmlFor="email">Email:</label>
              <StyledInput
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={changeForm}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Digite um e-mail válido (exemplo: usuario@dominio.com)"
                placeholder="Digite seu e-mail"
                required
              />
            </FormGroup>
  
            <FormGroup>
              <label htmlFor="password">Senha:</label>
              <PasswordInputContainer>
                <StyledInput
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={changeForm}
                  pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}'
                  title='A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.'
                  placeholder="Digite sua senha"
                  required
                />
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={togglePasswordVisibility}
                />
              </PasswordInputContainer>
            </FormGroup>
            <SubmitButton disabled={isLoading}>
            </SubmitButton>
          </StyledForm>
        </FormContainer>
        <StyledDiv>
          <StyledButton onClick={() => GoToSignup(navigate)}>
            Crie uma conta!
          </StyledButton>
        </StyledDiv>
        <GradientLineLogin />
      </>
    );
  };  