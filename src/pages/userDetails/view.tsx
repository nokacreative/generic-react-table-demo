import { DataType } from '@nokacreative/generic-react-table'
import React from 'react'

import { DetailPage } from '../../common/detailPage'

export const UserDetalis = () => {
  return (
    <DetailPage
      entityName="User"
      dbKey="users"
      columns={[
        {
          propertyPath: 'userName',
          headerText: 'Username',
          type: DataType.PLAIN_TEXT,
        },
        {
          propertyPath: 'displayName',
          headerText: 'Display Name',
          type: DataType.PLAIN_TEXT,
        },
        {
          propertyPath: 'dateJoined',
          headerText: 'Date Joined',
          type: DataType.DATE,
          showTime: true,
        },
        {
          propertyPath: 'groupId',
          headerText: 'Group ID',
          type: DataType.PLAIN_TEXT,
        },
      ]}
    />
  )
}
