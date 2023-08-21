import { ReactNode } from 'react'

import { TouchableOpacityProps, View } from 'react-native'

import { ButtonStyleProps, Container, Text } from './styles'

type ButtonProps = TouchableOpacityProps &
  ButtonStyleProps & {
    text: string
    icon?: ReactNode
    isSmallButton?: boolean
  }

export function Button({
  text,
  icon,
  type = 'PRIMARY',
  isSmallButton = false,
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} isSmallButton={isSmallButton} {...rest}>
      <View>{icon}</View>
      <Text type={type}>{text}</Text>
    </Container>
  )
}
