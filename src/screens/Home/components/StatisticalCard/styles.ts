import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type StyleProps = {
  isDietMeal: boolean
}

export const Container = styled.View<StyleProps>`
  margin: 24px 0 24px;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  border-radius: 8px;
  background-color: ${({ theme, isDietMeal }) =>
    isDietMeal ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Percent = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_7};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_6};
  `}
`

export const ArrowButton = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Icon = styled(ArrowUpRight).attrs<StyleProps>(({ theme, isDietMeal }) => ({
  color: isDietMeal ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``
