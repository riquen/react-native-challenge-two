import styled, { css } from 'styled-components/native'

export type StyleProps = {
  isDietMeal: boolean
}

export const Container = styled.View<StyleProps>`
  flex: 1;
  background-color: ${({ theme, isDietMeal }) =>
    isDietMeal ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Info = styled.View`
  flex: 1;
`

export const MealTitle = styled.Text`
  margin-bottom: 16px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_7};
  `}
`

export const MealDescription = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_6};
  `}
`

export const DateAndTimeTitle = styled.Text`
  margin-bottom: 16px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_7};
  `}
`

export const DateAndTimeDescription = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_6};
  `}
`

export const StatusContainer = styled.View`
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 8px 16px;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`

export const Status = styled.View<StyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 25px;
  background-color: ${({ theme, isDietMeal }) =>
    isDietMeal ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const StatusText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_7};
  `}
`
