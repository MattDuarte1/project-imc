import {Container} from './style'
import Logo from '../../assets/powered.png'

export const Header = () => {
    return (
        <Container>
            <img src={Logo} alt="Imc Powered by B7web" />
        </Container>
    );
}