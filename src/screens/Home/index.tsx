import { Header } from '@screens/Home/components/Header'
import { Button } from '@components/Button'

import { Container, MealsLabel } from './styles'
import { StatisticalCard } from './components/StatisticalCard'

export function Home() {
  return (
    <Container>
      <Header />
      <StatisticalCard />
      <MealsLabel>Refeições</MealsLabel>
      <Button text="Nova refeição" />
    </Container>
  )
}
