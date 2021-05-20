import React from 'react'

import './styles.scss'

import { Table } from '@nokacreative/generic-react-table'
import { columns } from './data'
import { SamplePage } from '../../common/samplePage'
import { database } from '../../assets/database'

export const HeaderSample = () => {
  return (
    <SamplePage
      headerText="Search and Filter Sample"
      description={
        <>
          <p>
            Search is a simple text-based search across all table rows. A custom search
            matcher can be specified, demonstrated in the <em>ID</em> column here, where
            only the initials generated off the name (ex. JD, SP) causes a match, and the
            ID text itself is not used.
          </p>
          <p>
            Filtering is specific and column-based. Each column&apos;s data type affects
            the type of filter that is generated, and can be further configured:
          </p>
          <ul>
            <li>Custom columns can specify the type of filter to be used.</li>
            <li>
              Text filters can specify whether to use an exact or partial match, and
              numeric and date filters can specify whether to use an exact match, ranged
              control, minimum threshold, or maxmimum threshold.
            </li>
            <li>
              The render method of each option in a Dropdown filter can be customized, as
              well as whether or not multiple selections are selected.
            </li>
          </ul>
          <p>
            The debounce time of search and filter inputs can be customized; it defaults
            to 200ms.
          </p>
        </>
      }
    >
      <Table
        pluralEntityName="people"
        columns={columns}
        data={database.people}
        isSearchable
        tableName="People"
        showResultCount
        isFilterable
      />
    </SamplePage>
  )
}
