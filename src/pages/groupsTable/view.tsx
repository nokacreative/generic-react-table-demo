import React from 'react'

import { Table } from '@noka/generic-react-table'
import { columns } from './data'
import { HydratedGroupModel } from './models'
import { SamplePage } from '../../common/samplePage'

type Props = {
  groups: HydratedGroupModel[]
}

export const GroupsTableView = ({ groups }: Props) => {
  return (
    <SamplePage
      headerText="Column Sorting and Resizing Sample"
      description={
        <>
          <p>
            The <em>Name</em> and <em># Users</em> columns are sortable, and the last two
            columns are resizable. This sample demonstrates single column sort, but it is
            possible to sort by multiple columns; see the server-side sample.
          </p>
          <p>
            To resize a column, hover over its edge, and the resize handle will appear.
          </p>
          <p>
            There is also a default width and growth ratio applied to the first column.
            <em># Users</em> uses a numeric column type to ensure that sorting occurs
            numerically, instead of as a string.
          </p>
        </>
      }
    >
      <Table pluralEntityName="groups" columns={columns} data={groups} />
    </SamplePage>
  )
}
