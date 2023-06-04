import React from 'react';
import Menu from './menu';
import Navbar from './navbar';
import Main from './main';

import Leaderboard from '../Component/leaderboard';
import Store from '../Component/store';
import Products from '../Component/Products';
import Salesreport from '../Component/salesReport';
import Messages from '../Component/messages';
import Settings from '../Component/settings';
import Signout from '../Component/signout';


import { Routes,Route } from 'react-router-dom';

import '../Styles/ap.css';
import '../../src/Plugin/feather.css';
import '../../src/Plugin/font-awesome.css';


function App() {
  return (

    <div id="wrapper">
<Menu/>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
<Navbar/>

<Routes>

<Route path='/' element={<Main />}></Route>
<Route path='/leaderboard' element={<Leaderboard />}></Route>
<Route path='/store' element={<Store />}></Route>
<Route path='/products' element={<Products />}></Route>
 <Route path='/salesreport' element={<Salesreport />}></Route> 
<Route path='/messages' element={<Messages />}></Route>
<Route path='/settings' element={<Settings />}></Route>
<Route path='/signout' element={<Signout />}></Route>
</Routes>

            </div>
        </div>
    </div>




  );
}

export default App;
