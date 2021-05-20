import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../assets/routes'
import { TableColumn, DataType, SortDirection } from '@noka/generic-react-table'
import { HydratedGroupModel } from './models'

export const columns: TableColumn<HydratedGroupModel>[] = [
  {
    headerText: 'Name',
    type: DataType.CUSTOM,
    render: (group: HydratedGroupModel) => (
      <Link to={ROUTES.groupDetails(group.id)}>{group.name}</Link>
    ),
    isSortable: true,
    sortAccessor: (group: HydratedGroupModel) => group.name,
    defaultSortDirection: SortDirection.ASCENDING,
    isResizable: true,
    defaultWidth: '200px',
  },
  {
    propertyPath: 'description',
    headerText: 'Rich Description',
    type: DataType.RICH_TEXT,
    isResizable: true,
  },
  {
    propertyPath: 'numUsers',
    headerText: '# Users',
    type: DataType.NUMBER,
    isSortable: true,
    defaultWidth: '0.5fr',
  },
]
