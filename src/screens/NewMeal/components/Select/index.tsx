import { useState } from 'react'

import { useTheme } from 'styled-components'

import { Container, Content, Label } from './styles'
import { Option } from '../Option'

export function Select() {
  const { COLORS } = useTheme()
  const [selected, setSelected] = useState<string>('')

  return (
    <Container>
      <Label>Está dentro da dieta?</Label>
      <Content>
        <Option
          backgroundColor={COLORS.GREEN_DARK}
          title="Sim"
          isActive={selected === 'Sim'}
          onPress={() => setSelected('Sim')}
        />
        <Option
          backgroundColor={COLORS.RED_DARK}
          title="Não"
          isActive={selected === 'Não'}
          onPress={() => setSelected('Não')}
        />
      </Content>
    </Container>
  )
}
