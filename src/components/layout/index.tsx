import { Wrapper } from './styled'

type Props = {
  children: JSX.Element
}

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
