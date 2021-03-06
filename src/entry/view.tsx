import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './styles.scss'

import { ID_PARAM_PLACEHOLDER, ROUTES } from '../assets/routes'
import { GroupDetalis } from '../pages/groupDetails'
import { GroupsTable } from '../pages/groupsTable'
import { UserDetalis } from '../pages/userDetails'
import { UsersTable } from '../pages/usersTable'
import { TagsTable } from '../pages/tagsTable'
import { ProductsTable } from '../pages/productsTable'
import { SelectionSample } from '../pages/selectionSample'
import { ServerSample } from '../pages/serverSample'
import { HeaderSample } from '../pages/headerSample'
import { PersonDetalis } from '../pages/personDetails'
import { ServerHeaderSample } from '../pages/serverHeaderSample'
import { MasterSample } from '../pages/masterSample'
import { StyleOverridesSample } from '../pages/styleOverridesSample'
import { TextOverrideSample } from '../pages/textOverridesSample'
import { RichTextConfigs } from '../pages/richTextConfigsSample'
import { HeaderCellTemplateSample } from '../pages/headerCellTemplateSample'
import { RowReorderingSample } from '../pages/rowReorderingSample'

export const Entry = () => (
  <Router basename="/">
    <div id="links">
      <p>Select the sample you would like to view:</p>
      <Link to={ROUTES.usersTable}>Simple</Link>
      <Link to={ROUTES.groupsTable}>Column Sorting and Resizing</Link>
      <Link to={ROUTES.tagsTable}>Pinned Columns and Column Reordering</Link>
      <Link to={ROUTES.productsTable}>Minimum Number of Rows and Paging</Link>
      <Link to={ROUTES.selectionSample}>Row Selection</Link>
      <Link to={ROUTES.rowReordering}>Row Reordering</Link>
      <Link to={ROUTES.serverSample}>Server-side Paging and Sorting</Link>
      <Link to={ROUTES.headerSample}>Search and Filter</Link>
      <Link to={ROUTES.serverHeaderSample}>Server-side Search and Filter</Link>
      <Link to={ROUTES.masterSample}>Master Sample</Link>

      <p>Further customizations:</p>
      <Link to={ROUTES.styleSample}>Overriding Styles</Link>
      <Link to={ROUTES.textOverrideSample}>Overriding Text</Link>
      <Link to={ROUTES.richTextConfigs}>Rich Text Configurations</Link>
      <Link to={ROUTES.headerCellTemplate}>Header Cell Template</Link>
    </div>
    <main>
      <Switch>
        <Route path={ROUTES.usersTable} component={UsersTable} />
        <Route path={ROUTES.groupsTable} component={GroupsTable} />
        <Route path={ROUTES.tagsTable} component={TagsTable} />
        <Route path={ROUTES.productsTable} component={ProductsTable} />
        <Route path={ROUTES.selectionSample} component={SelectionSample} />
        <Route path={ROUTES.rowReordering} component={RowReorderingSample} />
        <Route path={ROUTES.serverSample} component={ServerSample} />
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
        <Route path={ROUTES.textOverrideSample} component={TextOverrideSample} />
        <Route path={ROUTES.richTextConfigs} component={RichTextConfigs} />
        <Route path={ROUTES.headerCellTemplate} component={HeaderCellTemplateSample} />
      </Switch>
    </main>
  </Router>
)
