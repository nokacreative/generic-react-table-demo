import React from 'react'

import { database } from '../../assets/database'
import { HydratedGroupModel } from './models'
import { GroupsTableView } from './view'

export const GroupsTableContainer = () => {
  // In a real app, users and groups can be retrieved from the server, the state, etc.
  const hydratedGroups: HydratedGroupModel[] = database.groups.map((g) => ({
    ...g,
    numUsers: database.users.filter((u) => u.groupId === g.id).length,
  }))
  return <GroupsTableView groups={hydratedGroups} />
}
