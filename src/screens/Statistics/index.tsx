import { useTheme } from 'styled-components/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useRoute } from '@react-navigation/native'

import { Container, GeneralStatistics, Info, Title } from './styles'
import { Header } from './components/Header'
import { Card } from './components/Card'

type RouteParams = {
  isDietMeal: boolean
}

export function Statistics() {
  const { COLORS } = useTheme()
  const route = useRoute()
  const insets = useSafeAreaInsets()
  const { isDietMeal } = route.params as RouteParams

  return (
    <Container isDietMeal={isDietMeal} style={{ paddingTop: insets.top }}>
      <Header isDietMeal={isDietMeal} />
      <GeneralStatistics>
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
      </GeneralStatistics>
    </Container>
  )
}
