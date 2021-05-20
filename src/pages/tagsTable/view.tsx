import React from 'react'

import { Table } from '@nokacreative/generic-react-table'
import { columns } from './data'
import { SamplePage } from '../../common/samplePage'
import { database } from '../../assets/database'

export const TagsTable = () => {
  return (
    <SamplePage
      headerText="Pinned Columns and Column Reordering Sample"
      description={
        <>
          <p>
            The <em>ID</em> column is pinned here, meaning it will stay in place even if
            the screen is resized, while everything else scrolls. The number of pinned
            columns can be customized. All other columns can be reordered.
          </p>
          <p>The Colour column type is also shown.</p>
        </>
      }
    >
      <Table
        pluralEntityName="tags"
        columns={columns}
        data={database.tags}
        numPinnedColumns={1}
        canReorderColumns
      />
    </SamplePage>
  )
}
