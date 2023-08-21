import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

export type ButtonStyleProps = {
  type?: ButtonTypeStyleProps
  isSmallButton?: boolean
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  ${({ isSmallButton }) =>
    isSmallButton
      ? css`
          align-self: center;
          padding: 0 16px;
        `
      : css`
          flex: 1;
          width: 100%;
        `}
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  ${({ theme, type }) => css`
    background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_6 : theme.COLORS.WHITE};
    border: ${type === 'PRIMARY' ? 'none' : `1px solid ${theme.COLORS.GRAY_7}`};
  `}
`

export const Text = styled.Text<ButtonStyleProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_7};
  `}
`
