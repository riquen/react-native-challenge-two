import { MaskInputProps, Masks } from 'react-native-mask-input'

import { Container, DateTimeField, Label } from './styles'

const TIME_MASK = [/\d/, /\d/, ':', /\d/, /\d/]

type DateTimeProps = MaskInputProps & {
  label?: string
  isTime?: boolean
  value?: string
  onChangeText?: (masked: string, unmasked: string, obfuscated: string) => void
}

export function DateTime({ label, isTime = false, value, onChangeText, ...rest }: DateTimeProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <DateTimeField
        value={value}
        onChangeText={onChangeText}
        mask={isTime ? TIME_MASK : Masks.DATE_DDMMYYYY}
        {...rest}
      />
    </Container>
  )
}
