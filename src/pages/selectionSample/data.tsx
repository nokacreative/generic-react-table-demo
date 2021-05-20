import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../assets/routes'
import { TableColumn, DataType } from '@nokacreative/generic-react-table'
import { GroupModel } from '../../domain/group.model'
import { UserModel } from '../../domain/user.model'

export const columns = (groups: GroupModel[]): TableColumn<UserModel>[] => [
  {
    headerText: 'User Name',
    type: DataType.CUSTOM,
    render: (user: UserModel) => (
      <Link to={ROUTES.userDetails(user.id)}>{user.userName}</Link>
    ),
  },
  {
    propertyPath: 'displayName',
    headerText: 'Display Name',
    type: DataType.PLAIN_TEXT,
  },
  {
    propertyPath: 'groupId',
    headerText: 'Group',
    type: DataType.RELATION,
    relatedDataList: groups,
    render: (relatedGroup: GroupModel) => (
      <Link to={ROUTES.groupDetails(relatedGroup.id)}>{relatedGroup.name}</Link>
    ),
  },
  {
    propertyPath: 'dateJoined',
    headerText: 'Date Joined',
    type: DataType.DATE,
  },
]
