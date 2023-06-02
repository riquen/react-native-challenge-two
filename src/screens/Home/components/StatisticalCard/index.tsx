import { ArrowButton, Container, StyleProps, Description, Icon, Percent } from './styles'

export function StatisticalCard({ isDietMeal }: StyleProps) {
  return (
    <Container isDietMeal={isDietMeal}>
      <Percent>90,86%</Percent>
      <Description>das refeições dentro da dieta</Description>
      <ArrowButton>
        <Icon />
      </ArrowButton>
    </Container>
  )
}
