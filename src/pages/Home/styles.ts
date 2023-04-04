import styled from "styled-components";


export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100vw;
  height: 100vh;
  
  @media (max-width: 375px) {
    width: 100%;
    height: 100vh;
    
    html {
        font-size: 87.5%;
    }
  }
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-beetween;

  width: 660px;
  height: 450px;

  background: ${props => props.theme['white']};

  border-radius: 28px;
  box-shadow: 16px 16px 22px ${props => props.theme['light-lavender']};


  @media (max-width: 375px) {
    
    

    flex-direction: column;

    width: 100%;
    height: auto;

    border-radius: 0px;

    position: absolute;
    top: -30px;
    right: 0px;
    left: 0px;
  
  }

`


export const YourResultsCard = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-beet;
  /* gap: 2rem */

  width: 330px;
  height: 100%;

  padding: 2rem;

  border-radius: 28px;

  background: ${props => props.theme['light-royal-blue']};
  background: linear-gradient(0deg, ${props => props.theme['light-royal-blue']} 0%, ${props => props.theme['light-slate-blue']} 100%);

  span {
    padding: 1rem 0;
    font-weight: 700;
    font-size: 1.2rem;
    color: ${props => props.theme['light-lavender']};
  }

  h2 {
    padding: 1rem 0;
    font-weight: 800;
    font-size: 2rem;
    color: ${props => props.theme['white']};
  }

  p {
    padding: 1rem 0;
    font-weight: 500;
    font-size: 1rem;
    color: ${props => props.theme['light-lavender']};
    text-align: center;
  }

  @media (max-width: 375px) {
    width: 100%;

  }
  

`

export const Circle = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background: ${props => props.theme['violet-blue']};
  background: linear-gradient(0deg, ${props => props.theme['persian-blue']} 0%, ${props => props.theme['violet-blue']} 100%);

  border-radius: 100px;
  width: 160px;
  height: 160px;

  h3 {
    font-weight: 800;
    font-size: 3.125rem;
    color: ${props => props.theme['white']};
  }

  span {
    padding: 0;
    font-weight: 500;
    font-size: 1rem;
    color: ${props => props.theme['light-lavender']};
  }

`

export const SummaryList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  width: 50%;
  height: 100%;

  padding: 2rem;

  gap: 0.75rem;

  span {
    padding: 1rem 0;
    font-weight: 700;
    font-size: 1.2rem;
    color: ${props => props.theme['dark-gray-blue']};
  }

  @media (max-width: 375px) {
    width: 100%;
  }

`

interface CategoryProps {
  variant: 'reaction' | 'memory' | 'verbal' | 'visual';
}

export const Category = styled.div<CategoryProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  width: 100%;
  height: 50px;

  border-radius: 8px;

  color: ${props => props.variant === 'reaction' ? props.theme['light-red'] : 
                    props.variant === 'memory' ? props.theme['orange-yellow'] : 
                    props.variant === 'verbal' ? props.theme['green-teal'] : 
                    props.theme['cobalt-blue']
                    };

  background: ${props => props.variant === 'reaction' ? props.theme['light-red-alpha'] : 
                         props.variant === 'memory' ? props.theme['orange-yellow-alpha'] : 
                         props.variant === 'verbal' ? props.theme['green-teal-alpha'] : 
                         props.theme['cobalt-blue-alpha']
                        };

  div {
    display: flex;
    align-items: center;
    gap:0.5rem;

  }
  
`

export const Numbers = styled.div`
  display: flex ;
  align-items: center;
  gap:0.5rem;
  color: ${props => props.theme['light-lavender']};

  font-size: 1rem;

  span {
    font-weight: 700;
    color: ${props => props.theme['dark-gray-blue']};
  }

`

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;
  align-self: center;
  

  margin-top: 1rem;

  border: 0;
  border-radius: 30px;
  width: 100%;
  height: 50px;

  color: ${props => props.theme['white']};
  background: ${props => props.theme['dark-gray-blue']};

  &:hover {
    cursor: pointer;
    
    background: ${props => props.theme['light-royal-blue']};
  background: linear-gradient(0deg, ${props => props.theme['light-royal-blue']} 0%, ${props => props.theme['light-slate-blue']} 100%);
  }

`

