import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_3};
`

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Form = styled.View`
  flex: 1;
  gap: 16px;
`

export const DateAndTime = styled.View`
  flex-direction: row;
  gap: 16px;
`
