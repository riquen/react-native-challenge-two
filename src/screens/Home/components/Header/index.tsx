import logoImg from '@assets/logo.png'
import { Avatar } from '@screens/Home/components/Avatar'

import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Avatar />
    </Container>
  )
}
