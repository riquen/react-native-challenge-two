import logoImg from '@assets/logo.png'

import { Avatar, Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Avatar />
    </Container>
  )
}
