import React from 'react'

import { database } from '../../assets/database'
import { SelectionSampleView } from './view'

export const SelectionSampleContainer = () => {
  // In a real app, users and groups can be retrieved from the server, the state, etc.
  return <SelectionSampleView users={database.users} groups={database.groups} />
}
