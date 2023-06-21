import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

export type ButtonStyleProps = {
  type?: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex: 1;
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY_6 : theme.COLORS.WHITE};
  border-radius: 6px;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.WHITE};
  `}
`
