import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { View } from 'react-native'

import { useRoute } from '@react-navigation/native'
import { Button } from '@components/Button'

import {
  Container,
  Content,
  DateAndTimeDescription,
  DateAndTimeTitle,
  Info,
  MealDescription,
  MealTitle,
  Status,
  StatusContainer,
  StatusText,
} from './styles'
import { Header } from './components/Header'

type RouteParams = {
  isDietMeal: boolean
}

export function Meal() {
  const { COLORS } = useTheme()
  const insets = useSafeAreaInsets()
  const route = useRoute()
  const { isDietMeal } = route.params as RouteParams

  return (
    <Container isDietMeal={isDietMeal} style={{ paddingTop: insets.top }}>
      <Header />
      <Content style={{ paddingBottom: insets.bottom }}>
        <Info>
          <MealTitle>Sanduíche</MealTitle>
          <MealDescription>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </MealDescription>
          <DateAndTimeTitle>Data e hora</DateAndTimeTitle>
          <DateAndTimeDescription>12/08/2022 às 16:00</DateAndTimeDescription>
          <StatusContainer>
            <Status isDietMeal={isDietMeal} />
            <StatusText>{isDietMeal ? 'dentro da dieta' : 'fora da dieta'}</StatusText>
          </StatusContainer>
        </Info>
        <Button text="Editar refeição" icon={<PencilSimpleLine color={COLORS.WHITE} />} />
        <View style={{ marginBottom: 10 }} />
        <Button type="SECONDARY" text="Excluir refeição" icon={<Trash />} />
      </Content>
    </Container>
  )
}
