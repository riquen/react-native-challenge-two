import { ReactNode } from 'react'

import { TouchableOpacityProps, View } from 'react-native'

import { ButtonStyleProps, Container, Text } from './styles'

type ButtonProps = TouchableOpacityProps &
  ButtonStyleProps & {
    text: string
    icon?: ReactNode
  }

export function Button({ text, icon, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <View>{icon}</View>
      <Text>{text}</Text>
    </Container>
  )
}
