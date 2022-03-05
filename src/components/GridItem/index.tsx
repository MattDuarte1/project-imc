import {Level} from '../../helpers/imc'
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';
import { Container } from './style'

type Props = {
    data: Level;
}

export const GridItem = ({data}: Props) => {
    return (
        <Container style={{backgroundColor: data.color}}>
            <div className="gridIcon">
                <img src={data.icon === "up" ? upImage : downImage} alt={data.icon === 'up' ? 'Up Image': 'Down Image' } width={35} />

            </div>
            <div className="gridTitle">{data.title}</div>
            <div className="gridInfo">
            <>
                IMC está entre <strong>{data.imc[0]} e {data.imc[1]}</strong>
            </>
            </div>
        </Container>
    );
}