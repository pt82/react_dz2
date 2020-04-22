import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


const history = createBrowserHistory();

const Home = () => (
  <div>
  <div class="row">
    <div class="col s12 ">
      <div class="card">
        <div class="card-image">
        <img  src="https://avatars.mds.yandex.net/get-pdb/2212586/d3b49f80-b2f0-438d-8750-cd1cc48ab1bf/s1200?webp=false" />
          <span class="card-title">Мой прекрасный город Новосибирск</span>
        </div>
        </div>
      </div>
      </div>
  </div>
);

const Simvol = () => (
  <div>
  <h3 class="center">Символы</h3>
  <div class="row">
    <div class="col s4 ">
      <div class="card">
        <div class="card-image">
        <img  src="https://ds05.infourok.ru/uploads/ex/0e66/0008865d-a088991f/img9.jpg" />
          
        </div>
        </div>
      </div>

      <div class="col s4 ">
      <div class="card">
        <div class="card-image">
        <img  src="https://ds04.infourok.ru/uploads/ex/10d5/000a4a04-13234ab6/img2.jpg" />
         
        </div>
        </div>
      </div>

      <div class="col s4 ">
      <div class="card">
        <div class="card-image">
        <img  src="https://www.eurazcar.ru/images/574645674.jpg" />
         
        </div>
        </div>
      </div>


      </div>
  </div>
);
const CountPiple = () => (
  <div>
    <h2>В городе очень много жителей</h2>
  </div>
);

const Contacts = () => (
  <div class="center">
    <h1 >Контакты</h1>
    <li>+7 383 333 33 33</li>
    <li>+7 383 333 33 33</li>
    <li>+7 383 333 33 33</li>
    <li>+7 383 333 33 33</li>
  </div>
);

class City extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
          <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">Новосибирск</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/simvol">Символика</Link></li>
        <li><Link to="/count">Население города</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
       
      </ul>
    </div>
  </nav>

        <div>
           <Route exact path="/" component={Home} />
          <Route exact path="/count" component={CountPiple} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/simvol" component={Simvol} />
        </div>
      </BrowserRouter>
    );
  }
}

export default City;
