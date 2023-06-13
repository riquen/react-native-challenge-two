import { RefObject } from 'react'

import { TextInput, TextInputProps } from 'react-native'

import { Container, InputField, Label, StyleProps } from './styles'

type InputProps = TextInputProps &
  StyleProps & {
    label?: string
    inputRef?: RefObject<TextInput>
    isDescription?: boolean
  }

export function Input({ label, inputRef, isDescription = false, ...rest }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputField ref={inputRef} isDescription={isDescription} {...rest} />
    </Container>
  )
}
