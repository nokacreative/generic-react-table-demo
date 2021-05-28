import React from 'react'
import { Table } from '@nokacreative/generic-react-table'

import './styles.scss'

import { data, columns } from './data'
import { SamplePage } from '../../common/samplePage'

export const RichTextConfigs = () => {
  return (
    <SamplePage
      headerText="Rich Text Configurations Sample"
      description={
        <>
          <p>
            Rich text columns can specify whether or not to disallow line breaks. They can
            also accept custom sanitization configurations for allowed tags, allowed
            attributes, or even tags to transform.
          </p>
          <p>
            The following sample uses the same data for all columns, just with different
            configurations for each.
          </p>
        </>
      }
    >
      <Table columns={columns} data={data} />
    </SamplePage>
  )
}
