import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export type StyleProps = {
  isDietMeal: boolean
}

export const Container = styled(SafeAreaView)<StyleProps>`
  flex: 1;
  background-color: ${({ theme, isDietMeal }) =>
    isDietMeal ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};
  align-items: center;
  gap: 8px;
`

export const Title = styled.Text`
  margin-bottom: 16px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_7};
  `}
`

export const Info = styled.View`
  flex-direction: row;
  gap: 8px;
`
