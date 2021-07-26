import './App.css';
import ERC20 from './pages/ERC20';
import Nft from './pages/Nft';
import Vip from './pages/Vip';
import Tutorial from './pages/Tutorial';
import Tutorial2 from './pages/Tutorial2';
import Revoke from './pages/Revoke';
import Analytics from './pages/Analytics';
import Verification from './pages/Verification';
import Profil from './pages/Profil';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Vip2 from './pages/Vip2';
import Faq from './pages/Faq';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={ERC20} />
          <Route path='/nft' component={Nft} />
          <Route path='/vip' component={Vip} />
          <Route path='/vipNft' component={Vip2} />
          <Route path='/tutorial' component={Tutorial} />
          <Route path='/tutorialNft' component={Tutorial2} />
          <Route path='/revoke' component={Revoke} />
          <Route path='/analytics' component={Analytics} />
          <Route path='/verification' component={Verification} />
          <Route path='/profil' component={Profil} />
          <Route path='/faq' component={Faq} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
