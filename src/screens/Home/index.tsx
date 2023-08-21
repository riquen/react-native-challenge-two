import { Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { SectionList } from 'react-native'

import { Header } from '@screens/Home/components/Header'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

import { Container, MealsLabel, Title } from './styles'
import { StatisticCard } from './components/StatisticCard'
import { MealCard } from './components/MealCard'

const DATA = [
  {
    data: [
      {
        time: '12:00',
        meal: 'French Fries',
        isDietMeal: false,
      },
      {
        time: '15:00',
        meal: 'Onion Rings',
        isDietMeal: true,
      },
    ],
  },
  {
    data: [
      {
        time: '18:00',
        meal: 'Fried Shrimps',
        isDietMeal: false,
      },
      {
        time: '21:00',
        meal: 'Ice Cream',
        isDietMeal: true,
      },
    ],
  },
]

export function Home() {
  const { COLORS } = useTheme()
  const navigation = useNavigation()

  function handleButtonClick() {
    navigation.navigate('newMeal')
  }

  function handleMealClick(isDietMeal: boolean) {
    navigation.navigate('meal', { isDietMeal })
  }

  return (
    <Container>
      <Header />
      <StatisticCard isDietMeal />
      <MealsLabel>Refeições</MealsLabel>
      <Button
        text="Nova refeição"
        icon={<Plus color={COLORS.WHITE} />}
        onPress={handleButtonClick}
      />
      <SectionList
        sections={DATA}
        keyExtractor={({ meal }) => meal}
        renderItem={({ item }) => (
          <MealCard
            time={item.time}
            meal={item.meal}
            isDietMeal={item.isDietMeal}
            onPress={() => handleMealClick(item.isDietMeal)}
          />
        )}
        renderSectionHeader={() => <Title>02.06.23</Title>}
      />
    </Container>
  )
}
