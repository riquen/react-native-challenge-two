import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export type StyleProps = {
  isDietMeal: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};
  padding: 24px;
  justify-content: center;
`

export const Title = styled.Text<StyleProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  text-align: center;
  margin-bottom: 8px;
  ${({ theme, isDietMeal }) =>
    isDietMeal
      ? css`
          color: ${theme.COLORS.GREEN_DARK};
        `
      : css`
          color: ${theme.COLORS.RED_DARK};
        `}
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const BoldDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const Image = styled.Image`
  margin: 32px auto 32px;
`
