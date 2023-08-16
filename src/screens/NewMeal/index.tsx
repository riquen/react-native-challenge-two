import { useRef, useState } from 'react'

import { TextInput } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Input } from '@screens/NewMeal/components/Input'
import { Button } from '@components/Button'

import { Header } from './components/Header'
import { Container, Content, DateAndTime, Form } from './styles'
import { Select } from './components/Select'
import { DateTime } from './components/DateTimeInput'

export function NewMeal() {
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')
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
            <DateTime label="Data" value={date} onChangeText={setDate} />
            <DateTime label="Hora" isTime value={time} onChangeText={setTime} />
          </DateAndTime>
          <Select />
        </Form>
        <Button text="Cadastrar refeição" />
      </Content>
    </Container>
  )
}
