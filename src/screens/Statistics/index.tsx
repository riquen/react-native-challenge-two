import { useTheme } from 'styled-components/native'

import { useRoute } from '@react-navigation/native'

import { Container, Content, Info, Title } from './styles'
import { Header } from './components/Header'
import { Card } from './components/Card'

type RouteParams = {
  isDietMeal: boolean
}

export function Statistics() {
  const { COLORS } = useTheme()
  const route = useRoute()
  const { isDietMeal } = route.params as RouteParams

  return (
    <Container isDietMeal={isDietMeal}>
      <Header isDietMeal={isDietMeal} />
      <Content>
        <Title>Estatísticas gerais</Title>
        <Card title="22" description="melhor sequência de pratos dentro da dieta" />
        <Card title="109" description="refeições registradas" />
        <Info>
          <Card
            title="99"
            description="refeições dentro da dieta"
            backgroundColor={COLORS.GREEN_LIGHT}
          />
          <Card
            title="10"
            description="refeições fora da dieta"
            backgroundColor={COLORS.RED_LIGHT}
          />
        </Info>
      </Content>
    </Container>
  )
}
