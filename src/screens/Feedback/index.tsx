import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '@components/Button'
import womanImg from '@assets/woman.png'
import manImg from '@assets/man.png'

import { BoldDescription, Container, Description, Image, Title } from './styles'

type RouteParams = {
  isDietMeal: boolean
}

export function Feedback() {
  const navigation = useNavigation()

  const route = useRoute()
  const { isDietMeal } = route.params as RouteParams

  const handleButtonClick = () => navigation.navigate('home')

  return (
    <Container>
      <Title isDietMeal={isDietMeal}>{isDietMeal ? 'Continue assim!' : 'Que pena!'}</Title>
      {isDietMeal ? (
        <Description>
          Você continua <BoldDescription>dentro da dieta</BoldDescription>. Muito bem!
        </Description>
      ) : (
        <Description>
          Você <BoldDescription>saiu da dieta</BoldDescription> dessa vez, mas continue se
          esforçando e não desista!
        </Description>
      )}
      <Image source={isDietMeal ? womanImg : manImg} />
      <Button text="Ir para a página principal" onPress={handleButtonClick} isSmallButton />
    </Container>
  )
}
