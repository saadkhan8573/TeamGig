import React from 'react'
import { Route, Switch } from 'react-router'
import Homee from './components/Homee'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
       <Navbar/>
       <div className="flex ">
        <div className="flex-1">
        <Sidebar/>
        </div>
        <div className="flex-1">
          <Switch>
            <Route exact path="/" component={Homee} />
            {/* <Route exact path="/user/:id" component={UserData} /> */}
          </Switch>
        </div>
       </div>
    </>
  )
}

export default App