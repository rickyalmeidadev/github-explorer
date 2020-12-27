import { FunctionComponent } from 'react'

import Provider from 'context'
import Routes from 'routes'

const App: FunctionComponent = () => (
  <Provider>
    <Routes />
  </Provider>
)
export default App
