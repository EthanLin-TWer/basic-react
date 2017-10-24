import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from '../components/Home'
import Main from '../components/Main'
import PromptContainer from '../containers/PromptContainer'
import BattleContainer from '../containers/BattleContainer'

export default (
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }>
      <IndexRoute component={ Home } />
      <Route path="playerOne" header="Player One" component={ PromptContainer } />
      <Route path="playerTwo/:playerOne" header="Player Two" component={ PromptContainer } />
      <Route path="battle" header="Compare Players" component={ BattleContainer } />
    </Route>
  </Router>
)
