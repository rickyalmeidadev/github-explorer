import { Suspense, lazy, FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const RepositoryDetails = lazy(() => import('../pages/RepositoryDetails'))

const Routes: FunctionComponent = () => (
  <BrowserRouter>
    <Suspense fallback="">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/repositories/:repositoryName+" component={RepositoryDetails} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default Routes
