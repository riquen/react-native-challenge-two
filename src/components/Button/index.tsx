import { TouchableOpacityProps } from 'react-native'

import { ButtonStyleProps, Container, Text } from './styles'

type ButtonProps = TouchableOpacityProps &
  ButtonStyleProps & {
    text: string
  }

export function Button({ text, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Text>{text}</Text>
    </Container>
  )
}
