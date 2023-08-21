import { ArrowLeft } from 'phosphor-react-native'

import { useNavigation } from '@react-navigation/native'

import { BackButton, Container, Title } from './styles'

export function Header() {
  const navigation = useNavigation()

  function handleBackClick() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <BackButton onPress={handleBackClick}>
        <ArrowLeft />
      </BackButton>
      <Title>Refeição</Title>
    </Container>
  )
}
