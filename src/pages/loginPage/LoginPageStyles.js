import styled from 'styled-components';

export const LoginLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  max-width: 500px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

export const StyledImg = styled.img`
  display: block;
  max-width: 100%;
`;

export const StyledInput = styled.input`
  width: 90%;
  padding: 12px 20px;
  margin: 6px 0;
  display: inline-block;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 30px;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
`;

export const StyledButton = styled.button`
  border-radius: 20px;
  color: #fe9026;
  font-weight: bold;
  width: 90%;
  padding: 10px 20px;
  font-size: 16px;
  border: 1.3px solid #fe9026;
  cursor: pointer;
  margin: 20px;
  background-color: white;
`;

export const StyledDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
`;

export const GradientLineLogin = styled.div`
  width: 90%;
  height: 1.8px;
  background: linear-gradient(to right, #ff6489, #f9b24e);
  margin-top: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

export const FormContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

export const PasswordInputContainer = styled.div`
  position: relative;
  width: 90%;
`;

export const SubmitButton = styled.button`
  width: 90%;
  background-color: white;
  color: orange;
  border-radius: 20px;
  border: 2px solid orange;
  padding: 6px;
  margin: 20px;
  font-weight: bold;
`;

export const SignupButton = styled.button`
  width: 90%;
  background-color: white;
  color: orange;
  border-radius: 20px;
  border: 2px solid orange;
  padding: 6px;
  margin: 20px;
  font-weight: bold;
`;
