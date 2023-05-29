import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 25px;
  overflow: hidden;
`

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`
