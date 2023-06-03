import { useNavigation } from '@react-navigation/native'

import { ArrowButton, Container, Description, Icon, Percent, StyleProps } from './styles'

export function StatisticCard({ isDietMeal }: StyleProps) {
  const navigation = useNavigation()

  function handleArrowClick() {
    navigation.navigate('statistics', { isDietMeal })
  }

  return (
    <Container isDietMeal={isDietMeal}>
      <Percent>90,86%</Percent>
      <Description>das refeições dentro da dieta</Description>
      <ArrowButton onPress={handleArrowClick}>
        <Icon isDietMeal={isDietMeal} />
      </ArrowButton>
    </Container>
  )
}
