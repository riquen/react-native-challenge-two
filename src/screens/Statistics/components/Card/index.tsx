import { Container, Description, StyleProps, Title } from './styles'

type CardProps = StyleProps & {
  title: string
  description: string
}

export function Card({ title, description, backgroundColor }: CardProps) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}
