import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type OptionStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<OptionStyleProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  width: 100%;

  ${({ theme, isActive }) => isActive && css``}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_7};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`
