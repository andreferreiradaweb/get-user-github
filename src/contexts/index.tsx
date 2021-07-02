import { UserProvider } from './user'

type Props = {
  children: JSX.Element,
}

export const AppContexts = ({ children }: Props) => (
  <UserProvider>
    {children}
  </UserProvider>
)
