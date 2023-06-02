import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_3};
  margin-top: 8px;
`

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_7};
  `}
`

export const Divider = styled.View`
  height: 14px;
  margin: 0 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
`

export const Meal = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_7};
  `}
`

export type MealStatusProps = {
  isDietMeal: boolean
}

export const MealStatus = styled.View<MealStatusProps>`
  background-color: ${({ theme, isDietMeal }) =>
    isDietMeal ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  width: 14px;
  height: 14px;
  border-radius: 25px;
  position: absolute;
  right: 16px;
`
