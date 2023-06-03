import { useNavigation } from '@react-navigation/native'

import { BackButton, Container, Description, Icon, Percent, StyleProps } from './styles'

export function Header({ isDietMeal }: StyleProps) {
  const navigation = useNavigation()

  function handleBackClick() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Percent>90,86%</Percent>
      <Description>das refeições dentro da dieta</Description>
      <BackButton onPress={handleBackClick}>
        <Icon isDietMeal={isDietMeal} />
      </BackButton>
    </Container>
  )
}
