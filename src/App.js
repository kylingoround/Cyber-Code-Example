import React, { Component } from 'react';
import { Router, Link } from '@reach/router'

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'

// import ListView from './pages/ListView'
import ListViewCon from './redux/containers/ListViewCon'
// import DepartView from './pages/DepartView'
// import GraphView from './pages/GraphView'
import GraphCon from './redux/containers/GraphCon'
import DepartCon from './redux/containers/DepartViewCon'
import NotFound from './pages/404'

const App = () => (
  <>
    <>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </>

    {/* <ListView /> */}

    <Router>
·       <ListViewCon path='list' />
        <DepartCon path='depart'/>
        <GraphCon path='graph'/>
        <NotFound default />
    </Router>

  </>
)

export default App;
