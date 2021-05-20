import React from 'react'

import './styles.scss'

import { FilterMap, Table } from '@nokacreative/generic-react-table'
import { columns } from './data'
import { SamplePage } from '../../common/samplePage'
import { PersonModel } from '../../domain/person.model'

type Props = {
  data: PersonModel[]
  onSearch: (searchTerm: string) => void
  onFilter: (currentFilters: FilterMap<PersonModel>) => void
  isLoading: boolean
  totalNumResults: number
}

export const ServerHeaderSampleView = (props: Props) => {
  return (
    <SamplePage
      headerText="Server-Side Search and Filter Sample"
      description={
        <>
          <p>
            Use <code>useServerSideSearching</code> and <code>onSearch()</code> to run
            searching on the server side. The search term passed to{' '}
            <code>onSearch()</code> is the exact text, eg. whitepsace and case intact.
          </p>
          <p>
            Similarly, use <code>useServerSideFiltering</code> and <code>onFilter()</code>{' '}
            to run filtering on the server side. Filters are given in a map with the
            filtered column&apos;s index (this will be the ordered index if columns are
            orderable) as the key, and the column definition with the filter search term
            as the value.
          </p>
          <p>
            For simplicity, the fake server in this demo just returns one result with the{' '}
            <em>Bio</em> column having data on what search/filtering was performed.
          </p>
        </>
      }
    >
      <Table
        pluralEntityName="people"
        columns={columns}
        data={props.data}
        isSearchable
        useServerSideSearching
        onSearch={props.onSearch}
        tableName="People from Server"
        showResultCount
        isFilterable
        useServerSideFiltering
        onFilter={props.onFilter}
        isLoading={props.isLoading}
        totalNumResults={props.totalNumResults}
      />
    </SamplePage>
  )
}
