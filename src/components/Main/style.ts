import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    max-width: 900px;
    margin: 0 auto;



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
        transition: .5s ease-in;

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

        .rightArrow {
          position: absolute;
          background-color: #227c9d;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          margin-left: -35px;
          margin-top: 145px;

          &:hover {
              opacity: .8;
          }
        }
    }

    @media (max-width: 770px) {
        padding: 0 20px;
        flex-direction: column;
        margin: 0px;

       .leftSide {
          margin-right: 0px;
        }
        .rightSide {
          margin-top: 40px;
          margin-left: 0px;


         .rightArrow {
            margin-left: 42%;
            margin-top: -20px;
            transition: opacity 0.4s ease ;

            &:hover {
            opacity: 1;
            }

         }
            
       }
}

@media (max-width: 425px) {
       .rightSide {
          .rightArrow {
             margin-left: 35%;
         }        
          .grid {
           grid-template-columns: 1fr ;
          }
       }
    }

`;

