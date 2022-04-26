import { GlobalStyles } from './components/GlobalStyles';
import Theme from './components/Theme';
import Home from './pages/Home';

function App() {
  return (<Theme>
    <GlobalStyles />
    <Home />
  </Theme>
  );
}

export default App;
