import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '@components/Button'

import { Container } from './styles'

type RouteParams = {
  isDietMeal: boolean
}

export function Feedback() {
  const navigation = useNavigation()

  const route = useRoute()
  const { isDietMeal } = route.params as RouteParams

  console.log('🚀 ~ file: index.tsx:13 ~ Feedback ~ isDietMeal:', isDietMeal)

  const handleButtonClick = () => navigation.navigate('home')

  return (
    <Container>
      <Button text="Ir para a página principal" onPress={handleButtonClick} />
    </Container>
  )
}
