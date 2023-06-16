import { useRef } from 'react'

import { TextInput } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Input } from '@components/Input'

import { Header } from './components/Header'
import { Container, DateAndTime, Form } from './styles'

export function NewMeal() {
  const newMealInputRef = useRef<TextInput>(null)
  const insets = useSafeAreaInsets()

  return (
    <Container style={{ paddingTop: insets.top }}>
      <Header />
      <Form>
        <Input label="Nome" inputRef={newMealInputRef} />
        <Input
          label="Descrição"
          inputRef={newMealInputRef}
          isDescription
          multiline
          textAlignVertical="top"
        />
        <DateAndTime>
          <Input label="Data" inputRef={newMealInputRef} />
          <Input label="Hora" inputRef={newMealInputRef} />
        </DateAndTime>
      </Form>
    </Container>
  )
}
