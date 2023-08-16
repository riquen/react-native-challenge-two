import { TouchableOpacityProps } from 'react-native'

import { Container, OptionStyleProps, Status, Title } from './styles'

type OptionProps = TouchableOpacityProps &
  OptionStyleProps & {
    title: string
  }

export function Option({
  title,
  statusBackground,
  isActive = false,
  selected,
  ...rest
}: OptionProps) {
  return (
    <Container isActive={isActive} selected={selected} {...rest}>
      <Status statusBackground={statusBackground} />
      <Title>{title}</Title>
    </Container>
  )
}
