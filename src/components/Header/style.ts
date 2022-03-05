import styled from 'styled-components';

export const Container = styled.header`
    margin: 25px auto;
    max-width: 900px;
     
    img {
        max-width: 15rem ;
    }

    @media (max-width: 770px) {
        padding: 0 20px;
    }
`;
