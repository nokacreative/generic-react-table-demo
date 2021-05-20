import { DataType } from '@nokacreative/generic-react-table'
import React from 'react'

import { DetailPage } from '../../common/detailPage'

export const GroupDetalis = () => {
  return (
    <DetailPage
      entityName="Group"
      dbKey="groups"
      columns={[
        {
          propertyPath: 'name',
          headerText: 'Name',
          type: DataType.PLAIN_TEXT,
        },
        {
          propertyPath: 'description',
          headerText: 'Description',
          type: DataType.RICH_TEXT,
        },
      ]}
    />
  )
}
