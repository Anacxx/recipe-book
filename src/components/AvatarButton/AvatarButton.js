import { GoToLogin } from "../../router/Coordinator";
import { AvatarLink, AvatarIcon, Tooltip } from "./AvatarButtonStyles";
import { useNavigate } from 'react-router-dom'; 
const AvatarLogin = ({ onClick}) => {
    const navigate = useNavigate();
    return (
      <AvatarLink href="/login" onClick={(e) => {
        e.preventDefault();
        GoToLogin(navigate)}}>
        <AvatarIcon />
        <Tooltip>Login</Tooltip>
      </AvatarLink>
    );
  };
  
  export default AvatarLogin;