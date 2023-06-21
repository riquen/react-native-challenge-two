import { useState } from 'react'

import { FlatList } from 'react-native'

import { Container, Content, Label } from './styles'
import { Option } from '../Option'

type SelectProps = {
  data: string[]
}

export function Select({ data }: SelectProps) {
  const [selected, setSelected] = useState<string>('')

  return (
    <Container>
      <Label>Está dentro da dieta?</Label>
      <Content>
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Option title={item} isActive={item === selected} onPress={() => setSelected(item)} />
          )}
          horizontal
        />
      </Content>
    </Container>
  )
}
