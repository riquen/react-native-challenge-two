import { useRef } from 'react'

import { TextInput } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Input } from '@screens/NewMeal/components/Input'
import { Button } from '@components/Button'

import { Header } from './components/Header'
import { Container, Content, DateAndTime, Form } from './styles'
import { Select } from './components/Select'

export function NewMeal() {
  const newMealInputRef = useRef<TextInput>(null)
  const insets = useSafeAreaInsets()

  return (
    <Container style={{ paddingTop: insets.top }}>
      <Header />
      <Content style={{ paddingBottom: insets.bottom }}>
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
          <Select data={['Sim', 'Não']} />
        </Form>
        <Button text="Cadastrar refeição" />
      </Content>
    </Container>
  )
}
