import { DataType } from '@nokacreative/generic-react-table'
import React from 'react'

import { DetailPage } from '../../common/detailPage'

export const PersonDetalis = () => {
  return (
    <DetailPage
      entityName="Person"
      dbKey="people"
      columns={[
        {
          propertyPath: 'name',
          headerText: 'Name',
          type: DataType.PLAIN_TEXT,
        },
        {
          propertyPath: 'age',
          headerText: 'Age',
          type: DataType.NUMBER,
        },
        {
          propertyPath: 'dateOfBirth',
          headerText: 'Date of Birth',
          type: DataType.DATE,
          showTime: true,
          showSeconds: true,
        },
        {
          propertyPath: 'favColor',
          headerText: 'Favourite Colour',
          type: DataType.COLOR,
        },
        {
          propertyPath: 'bio',
          headerText: 'Bio',
          type: DataType.RICH_TEXT,
        },
        {
          propertyPath: 'income',
          headerText: 'Income',
          type: DataType.MONEY,
        },
      ]}
    />
  )
}
