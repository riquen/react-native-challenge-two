import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type StyleProps = {
  isDietMeal: boolean
}

export const Container = styled.View`
  margin: 24px;
  justify-content: center;
  align-items: center;
`

export const Percent = styled.Text`
  margin-top: 12px;
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

export const BackButton = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 0;
`

export const Icon = styled(ArrowLeft).attrs<StyleProps>(({ theme, isDietMeal }) => ({
  color: isDietMeal ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<StyleProps>``
