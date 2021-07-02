import { ComponentType } from 'react'
import { RouteProps as RoutePropsRouterDom, Route as RouteRouterDom, Redirect } from 'react-router-dom'
import { useUserContext } from '../contexts/user'
import { toastError } from '../helpers/toast'

interface Props extends RoutePropsRouterDom {
  isPrivate?: boolean;
  component: ComponentType;
  warningMessage?: string;
}

export const Route = ({ isPrivate = false, component: Component, warningMessage, ...rest }: Props) => {
  const { user } = useUserContext()

  return (
    <RouteRouterDom
      {...rest}
      render={({ location }) => isPrivate === !!user ? (
        <Component />
      ) : (
        <>
          {warningMessage && toastError(warningMessage)}

          <Redirect to={{
            pathname: isPrivate ? '/' : '/user',
            state: { from: location }
          }} />
        </>
      )}
    />
  )
}
