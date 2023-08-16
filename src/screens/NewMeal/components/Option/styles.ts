import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

import { SELECT_OPTIONS } from '../Select/constants'

export type OptionStyleProps = {
  isActive?: boolean
  selected?: string
  statusBackground?: string
}

export const Container = styled(TouchableOpacity)<OptionStyleProps>`
  width: 100%;
  flex-shrink: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  ${({ theme, isActive, selected }) =>
    isActive &&
    selected === SELECT_OPTIONS.YES &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_DARK};
      background-color: ${theme.COLORS.GREEN_LIGHT};
    `}
  ${({ theme, selected, isActive }) =>
    isActive &&
    selected === SELECT_OPTIONS.NO &&
    css`
      border: 1px solid ${theme.COLORS.RED_DARK};
      background-color: ${theme.COLORS.RED_LIGHT};
    `}
`

export const Status = styled.View<OptionStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 25px;
  background-color: ${({ statusBackground }) => statusBackground};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_7};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`
