import React, { useState } from 'react';
import LoginImg from '../../assets/loginImg.jpg'
import { SubmitButton,TogglePassword, FormContainer, ErrorMessage, FormGroup, PasswordInputContainer, Form} from './LoginPageStyles';
export const LoginPage = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [showPassword, setShowPassword] = useState(false);
        const [emailError, setEmailError] = useState('');
        const [passwordError, setPasswordError] = useState('');
      
        const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
        };
      
        const validateEmail = () => {
          if (!email) {
            setEmailError('Por favor, insira um endereço de email.');
          } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Por favor, insira um endereço de email válido.');
          } else {
            setEmailError('');
          }
        };

        const validatePassword = () => {
          if (!password) {
            setPasswordError('Por favor, insira uma senha.');
          } else if (password.length < 8) {
            setPasswordError('A senha deve ter pelo menos 8 caracteres.');
          } else if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError('A senha deve conter pelo menos uma letra maiúscula.');
          } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setPasswordError('A senha deve conter pelo menos um caractere especial.');
          } else {
            setPasswordError('');
          }
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          validateEmail();
          validatePassword();
          if (emailError === '' && passwordError === '') {
            console.log('Dados do formulário enviados:', { email, password });
          }
        };
    return(
        <>
        <div>
            <img src={LoginImg} alt='Imagem de comida' />
        </div>
        <div>
        <FormContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            required
          />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <label htmlFor="password">Senha:</label>
          <PasswordInputContainer>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              required
            />
            <TogglePassword onClick={togglePasswordVisibility}>
              {showPassword ? 'Esconder' : 'Mostrar'}
            </TogglePassword>
          </PasswordInputContainer>
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </FormGroup>

        <SubmitButton type="submit">Entrar</SubmitButton>
      </Form>
    </FormContainer>
        </div>
        </>
    )
}