import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type OptionStyleProps = {
  isActive?: boolean
  backgroundColor?: string
}

export const Container = styled(TouchableOpacity)<OptionStyleProps>`
  width: 100%;
  flex-shrink: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  gap: 8px;
`

export const Status = styled.View<OptionStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 25px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_7};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`
