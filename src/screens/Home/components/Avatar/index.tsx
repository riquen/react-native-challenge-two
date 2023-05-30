import { Container, Image } from './styles'

export function Avatar() {
  return (
    <Container>
      <Image source={{ uri: 'https://picsum.photos/200' }} />
    </Container>
  )
}
