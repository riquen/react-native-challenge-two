import { TouchableOpacityProps } from 'react-native'

import { Container, OptionStyleProps, Status, Title } from './styles'

type OptionProps = TouchableOpacityProps &
  OptionStyleProps & {
    title: string
  }

export function Option({ title, backgroundColor, isActive = false, ...rest }: OptionProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Status backgroundColor={backgroundColor} />
      <Title>{title}</Title>
    </Container>
  )
}
