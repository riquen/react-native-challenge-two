import { useTheme } from 'styled-components'

import { Container, Content, Label } from './styles'
import { Option } from '../Option'
import { SELECT_OPTIONS } from './constants'

type SelectProps = {
  selected?: SELECT_OPTIONS
  onPress: (selected: SELECT_OPTIONS) => void
}

export function Select({ selected, onPress }: SelectProps) {
  const { COLORS } = useTheme()

  return (
    <Container>
      <Label>Está dentro da dieta?</Label>
      <Content>
        <Option
          statusBackground={COLORS.GREEN_DARK}
          title={SELECT_OPTIONS.YES}
          isActive={selected === SELECT_OPTIONS.YES}
          selected={selected}
          onPress={() => onPress(SELECT_OPTIONS.YES)}
        />
        <Option
          statusBackground={COLORS.RED_DARK}
          title={SELECT_OPTIONS.NO}
          isActive={selected === SELECT_OPTIONS.NO}
          selected={selected}
          onPress={() => onPress(SELECT_OPTIONS.NO)}
        />
      </Content>
    </Container>
  )
}
