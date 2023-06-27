import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export type StyleProps = {
  isDescription?: boolean
}

export const Container = styled.View`
  width: 100%;
  flex-shrink: 1;
  gap: 4px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_6};
  `}
`

export const InputField = styled(TextInput)<StyleProps>`
  min-height: ${({ isDescription }) => (isDescription ? '120px' : '48px')};
  max-height: ${({ isDescription }) => (isDescription ? '120px' : '48px')};
  border-radius: 6px;
  padding: 14px;
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_3};
    color: ${theme.COLORS.GRAY_7};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
