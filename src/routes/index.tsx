import { BrowserRouter, Switch } from 'react-router-dom'
import { Route } from './Route'
import { Home } from '../pages/home'
import { User } from '../pages/user'
import { AppContexts } from '../contexts'
import { GlobalStyles } from '../globalStyle'
import { StyledToast } from '../helpers/styled'

const MESSAGE_USER_NOT_FOUND = 'Faça a busca pelo usuário antes para mostrar a página de descrição!'

export const Routes: React.FC = () => (
  <BrowserRouter>
    <GlobalStyles />
    <StyledToast />
    <AppContexts>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" isPrivate warningMessage={MESSAGE_USER_NOT_FOUND} component={User} />
        <Route path="/" component={() => <>Page not found!</>} />
      </Switch>
    </AppContexts>
  </BrowserRouter>
)
