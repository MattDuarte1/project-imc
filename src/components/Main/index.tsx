import { GridItem } from '../GridItem';
import {Container} from './style'
import {Level, levels, calculateImc} from '../../helpers/imc'
import { useState } from 'react';

export const Main = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [showItem, setShowItem ] = useState<Level | null>(null);

    const handleCalculateButton = () => {
        if(heightField && weightField) {
            setShowItem(calculateImc(heightField, weightField));
        } else {
            alert('Coloque os valores')
        }
    }

    return (
        <Container>
            <div className='leftSide'>
            <h1>Calcule o seu IMC</h1>
            <p>IMC é a sigla para Indice de Massa Corpórea,
            parâmetro adotado pela Organização Mundial de Saúde para
            calcular o peso ideal de cada pessoa.
            </p>
            <input 
            type="text" 
            placeholder='Digite a sua altura Ex: 1,5 (em mêtros)' 
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
             />
            <input 
            type="text" 
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            placeholder='Digite o seu peso Ex: 75,3 (em kg)'
             />
            <button onClick={handleCalculateButton}>Calcular</button>
            </div>

            <div className="rightSide">
             {!showItem && 
                <div className="grid">
                   {levels.map((item, key) => (
                     <GridItem key={key} data={item}/>
                    ))}
                </div>
             }
             {showItem && 
               <div className="rightBig">
                 <div className="rightArrow"></div>
                 <GridItem item={showItem} />
               </div>
             
             }
        </div>
        </Container>
    );
}