import React from 'react'

import { database } from '../../assets/database'
import { UsersTableView } from './view'

export const UsersTableContainer = () => {
  // In a real app, users and groups can be retrieved from the server, the state, etc.
  return <UsersTableView users={database.users} groups={database.groups} />
}
