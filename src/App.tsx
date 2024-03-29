import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Footer from './components/Footer'
import Header from './components/Header'
import PagesRouter from './routes'
import { store } from './store'

import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Header />
        <PagesRouter />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
