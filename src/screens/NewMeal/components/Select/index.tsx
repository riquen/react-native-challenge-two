import { useCallback, useState } from 'react'

import { useTheme } from 'styled-components'

import { Container, Content, Label } from './styles'
import { Option } from '../Option'
import { SELECT_OPTIONS } from './constants'

export function Select() {
  const { COLORS } = useTheme()
  const [selected, setSelected] = useState<SELECT_OPTIONS>()

  const handlePress = useCallback((selectedOption: SELECT_OPTIONS) => {
    setSelected(selectedOption)
  }, [])

  return (
    <Container>
      <Label>Está dentro da dieta?</Label>
      <Content>
        <Option
          statusBackground={COLORS.GREEN_DARK}
          title={SELECT_OPTIONS.YES}
          isActive={selected === SELECT_OPTIONS.YES}
          selected={selected}
          onPress={() => handlePress(SELECT_OPTIONS.YES)}
        />
        <Option
          statusBackground={COLORS.RED_DARK}
          title={SELECT_OPTIONS.NO}
          isActive={selected === SELECT_OPTIONS.NO}
          selected={selected}
          onPress={() => handlePress(SELECT_OPTIONS.NO)}
        />
      </Content>
    </Container>
  )
}
