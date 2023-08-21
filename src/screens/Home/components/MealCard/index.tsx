import { TouchableOpacityProps } from 'react-native'

import { Container, Time, Divider, Meal, MealStatus, MealStatusProps } from './styles'

type MealCardProps = TouchableOpacityProps &
  MealStatusProps & {
    time: string
    meal: string
  }

export function MealCard({ time, meal, isDietMeal, ...rest }: MealCardProps) {
  return (
    <Container {...rest}>
      <Time>{time}</Time>
      <Divider />
      <Meal>{meal}</Meal>
      <MealStatus isDietMeal={isDietMeal} />
    </Container>
  )
}
