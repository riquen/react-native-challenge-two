import { Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

import { Header } from '@screens/Home/components/Header'
import { Button } from '@components/Button'

import { Container, MealsLabel } from './styles'
import { StatisticalCard } from './components/StatisticalCard'

export function Home() {
  const { COLORS } = useTheme()

  return (
    <Container>
      <Header />
      <StatisticalCard />
      <MealsLabel>Refeições</MealsLabel>
      <Button text="Nova refeição" icon={<Plus color={COLORS.WHITE} />} />
    </Container>
  )
}
