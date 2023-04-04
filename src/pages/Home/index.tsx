import { Button, Category, Circle, HomeContainer, Numbers, ResultsContainer, SummaryList, YourResultsCard } from "./styles";
import memoryIcon from "../../assets/icon-memory.svg"
import reactionIcon from "../../assets/icon-reaction.svg"
import verbalIcon from "../../assets/icon-verbal.svg"
import visualIcon from "../../assets/icon-visual.svg"
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";



interface Category {
  category: string;
  score: number;
  icon: string;
}

export function Home () {

  const [category, setCategory] = useState<Category[]>([])

  async function fetchCategorys() {

    const response = await api.get('categorys', {
     
    })
    setCategory(response.data)
  }

  useEffect(() => {
    fetchCategorys();
    
  }, [])

  function mediaCategorys() {
    let media = category.reduce((media, data) => media + data.score, 0)
    // console.log(typeof media)
    return Math.round(media / category.length);
  }

  function getScoreOfCategory(cat: string) {
    let points = category.find( data => data.category === cat)
    // console.log(typeof points?.score)
    return points;
  }


  return (
    <HomeContainer>
      
      <ResultsContainer>
        <YourResultsCard>
          <span>Your Result</span>
          <Circle>
            <h3>{mediaCategorys()}</h3>
            <span>of 100</span>
          </Circle>

          <h2>Great</h2>

          <p>You scored higher than 65% of the people who have taken these tests.</p>

        </YourResultsCard>


        <SummaryList>
          <span>Summary</span>
          <Category variant="reaction">
            <div>
              <img src={ reactionIcon } alt="" />
              Reaction  
            </div>
            <Numbers><span>{getScoreOfCategory('Reaction')?.score}</span>/ 100</Numbers>
          </Category>

          <Category variant="memory">
            <div>
              <img src={ memoryIcon } alt="" />
              Memory  
            </div>
            <Numbers><span>{getScoreOfCategory('Memory')?.score}</span>/ 100</Numbers>
          </Category>

          <Category variant="verbal">
            <div>
              <img src={ verbalIcon } alt="" />
              Verbal  
            </div>
            <Numbers><span>{getScoreOfCategory('Verbal')?.score}</span>/ 100</Numbers>
          </Category>

          <Category variant="visual">
            <div>
              <img src={ visualIcon } alt="" />
              Visual  
            </div>
            <Numbers><span>{getScoreOfCategory('Visual')?.score}</span>/ 100</Numbers>
          </Category>
          

          <Button>Continue</Button>
        </SummaryList>


      </ResultsContainer>
      
      
    </HomeContainer>
  )
}