import {StyledErrorImg} from './ErrorPageStyles';
import ErrorImg from '../../assets/error.jpg';
export const ErrorPage = () => {
    return(
    <div className="error-page">
        <StyledErrorImg src={ErrorImg} alt='Página inexistente! Erro 404'/>
    </div>
    )
}