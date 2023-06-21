import { TouchableOpacityProps } from 'react-native'

import { Container, OptionStyleProps, Title } from './styles'

type OptionProps = TouchableOpacityProps &
  OptionStyleProps & {
    title: string
  }

export function Option({ title, isActive = false, ...rest }: OptionProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
