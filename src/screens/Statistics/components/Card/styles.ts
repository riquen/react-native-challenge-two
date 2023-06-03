import styled, { css } from 'styled-components/native'

export type StyleProps = {
  backgroundColor?: string
}

export const Container = styled.View<StyleProps>`
  width: 100%;
  flex-shrink: 1;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 8px;
  border-radius: 8px;
  background-color: ${({ theme, backgroundColor }) => backgroundColor || theme.COLORS.GRAY_2};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_7};
  `}
`

export const Description = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_6};
  `}
`
