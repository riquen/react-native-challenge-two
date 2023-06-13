import { useRef } from 'react'

import { TextInput } from 'react-native'

import { Input } from '@components/Input'

import { Header } from './components/Header'
import { Container, Content, DateAndTime } from './styles'

export function NewMeal() {
  const newMealInputRef = useRef<TextInput>(null)

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Content>
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
      </Content>
    </>
  )
}
