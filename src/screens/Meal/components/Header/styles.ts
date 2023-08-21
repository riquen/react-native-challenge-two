import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  margin: 24px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_7};
  `}
`

export const BackButton = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 0;
`
