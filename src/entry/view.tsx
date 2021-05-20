import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './styles.scss'

import { ID_PARAM_PLACEHOLDER, ROUTES } from '../assets/routes'
import { GroupDetalis } from '../pages/groupDetails'
import { GroupsTable } from '../pages/groupsTable'
import { UserDetalis } from '../pages/userDetails'
import { UsersTable } from '../pages/usersTable'
import { TagsTable } from '../pages/tagsTable'
import { ProductsTable } from '../pages/productsTable'
import { SelectionSample } from '../pages/selectionSample'
import { ServerSampleContainer } from '../pages/serverSample'
import { HeaderSample } from '../pages/headerSample'
import { PersonDetalis } from '../pages/personDetails'
import { ServerHeaderSample } from '../pages/serverHeaderSample'
import { MasterSample } from '../pages/masterSample'
import { StyleOverridesSample } from '../pages/styleOverridesSample'

export const Entry = () => (
  <Router>
    <div id="links">
      <p>Select the sample you would like to view:</p>
      <Link to={ROUTES.usersTable}>Simple</Link>
      <Link to={ROUTES.groupsTable}>Column Sorting and Resizing</Link>
      <Link to={ROUTES.tagsTable}>Pinned Columns and Column Reordering</Link>
      <Link to={ROUTES.productsTable}>Minimum Number of Rows and Paging</Link>
      <Link to={ROUTES.selectionSample}>Row Selection</Link>
      <Link to={ROUTES.serverSample}>Server-side Paging and Sorting</Link>
      <Link to={ROUTES.headerSample}>Search and Filter</Link>
      <Link to={ROUTES.serverHeaderSample}>Server-side Search and Filter</Link>
      <Link to={ROUTES.masterSample}>Master Sample</Link>
      <Link to={ROUTES.styleSample}>Overriding Styles</Link>
    </div>
    <main>
      <Switch>
        <Route path={ROUTES.usersTable} component={UsersTable} />
        <Route path={ROUTES.groupsTable} component={GroupsTable} />
        <Route path={ROUTES.tagsTable} component={TagsTable} />
        <Route path={ROUTES.productsTable} component={ProductsTable} />
        <Route path={ROUTES.selectionSample} component={SelectionSample} />
        <Route path={ROUTES.serverSample} component={ServerSampleContainer} />
        <Route path={ROUTES.headerSample} component={HeaderSample} />
        <Route path={ROUTES.serverHeaderSample} component={ServerHeaderSample} />
        <Route path={ROUTES.masterSample} component={MasterSample} />
        <Route path={ROUTES.userDetails(ID_PARAM_PLACEHOLDER)} component={UserDetalis} />
        <Route
          path={ROUTES.groupDetails(ID_PARAM_PLACEHOLDER)}
          component={GroupDetalis}
        />
        <Route
          path={ROUTES.personDetails(ID_PARAM_PLACEHOLDER)}
          component={PersonDetalis}
        />
        <Route path={ROUTES.styleSample} component={StyleOverridesSample} />
      </Switch>
    </main>
  </Router>
)
