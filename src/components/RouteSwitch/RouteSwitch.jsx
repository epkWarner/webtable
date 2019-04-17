import React from 'react'
import { Switch, Route } from 'react-router-dom'

//route components
import Home from '../Home/Home';
import UserHome from '../User/userhome/UserHome'
import UserAccount from '../User/account/UserAccount';
import ActiveGames from '../Game/Active/ActiveGames'
import OngoingGames from '../Game/Ongoing/OngoingGames'
import NewGame from '../Game/New/NewGame'
import ExistingCharacters from '../Character/Existing/ExistingCharacters'
import NewCharacter from '../Character/New/NewCharacter'
import CustomTemplate from '../Character/Custom/CustomTemplate';

export default function RouteSwitch() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/userhome' component={UserHome} />
            <Route exact path='/account' component={UserAccount} />
            <Route exact path='/activegames' component={ActiveGames} />
            <Route exact path='/ongoinggames' component={OngoingGames} />
            <Route exact path='/newgame' component={NewGame} />
            <Route exact path='/characters' component={ExistingCharacters} />
            <Route exact path='/newcharacter' component={NewCharacter} />
            <Route exact path='/customtemplate' component={CustomTemplate} />
        </Switch>
    )
}
