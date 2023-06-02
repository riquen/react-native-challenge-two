import { Container, Time, Divider, Meal, MealStatus, MealStatusProps } from './styles'

type MealCardProps = MealStatusProps & {
  time: string
  meal: string
}

export function MealCard({ time, meal, isDietMeal }: MealCardProps) {
  return (
    <Container>
      <Time>{time}</Time>
      <Divider />
      <Meal>{meal}</Meal>
      <MealStatus isDietMeal={isDietMeal} />
    </Container>
  )
}
