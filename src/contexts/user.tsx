import { createContext, useContext, useState } from 'react'
import { api } from '../services/api'
import { toastError } from '../helpers/toast';
import { useHistory } from 'react-router-dom'

interface ContextType {
  user: User | null;
  getUser: (username: string) => Promise<void>;
  loading: Boolean | null;
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const UserContext = createContext({} as ContextType)

type Props = {
  children: JSX.Element,
}

interface User {
  name: String;
  login: String;
  avatar_url: String;
  bio: String;
  blog: String;
  location: String;  
}

export const UserProvider = ({ children }: Props) => {

  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean | null>(null)
  const [ inputValue, setInputValue ] = useState<string>('')
  const history = useHistory()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputValue(event.target.value)
  }

  const getUser = async (username: string): Promise<void> => {
    try {
      setLoading(true)
      const { data } = await api.get(`/users/${username}`)
      setUser(data)
      setInputValue('')
      setLoading(false)
      history.push('/user')
    } catch (error) {
      setLoading(false)
      toastError('Falha ao buscar o usuário, por favor tente novamente.')
    }
  }

  const contextValues = {
   user,
   getUser,
   loading,
   inputValue,
   handleChange
  }

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used with a ModalProvider')
  }
  return context
}
