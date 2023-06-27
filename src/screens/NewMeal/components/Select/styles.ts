import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  gap: 4px;
`

export const Content = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_6};
  `}
`
