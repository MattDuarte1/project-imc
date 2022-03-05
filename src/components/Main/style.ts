import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    max-width: 900px;
    margin: auto ;

    .leftSide {
    margin-right: 40px;
    flex: 1;

    h1 {
     margin-bottom: 30px;
     font-size: 40px;
     color: #3a4b5c;
    }

    p {
     font-size: 1rem;
     margin-bottom: 40px;
     color: #6A7D8B;
    }

    input {
     width: 100%;
     border: 0;
     border-bottom: 2px solid rgba(150, 163, 171, .5);
     padding: 10px 2px;
     outline: 0;
     margin-bottom: 20px;
     font-size: 14px;
     background: var(--background);
    }



    button {
    width: 350px ;
    width: 100%;
    margin-top: 40px;
    border: 0;
    border-radius: 10px;
    background: #227c9D ;
    font-size: 15px;
    padding: 15px 0;
    color: #fff;
    transition: all 0.4s ease ;

      &:hover {
      filter: brightness(0.9);
            }


        }
    }

    .rightSide {
        margin-left: 40px;
        flex: 1;
        display: flex;

        .rightBig {
            flex: 1;
            display: flex;
        }

        .grid {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        }
    }

`;

