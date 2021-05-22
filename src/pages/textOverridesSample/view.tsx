import React from 'react'

import '../headerSample/styles.scss'

import { Table } from '@nokacreative/generic-react-table'
import { SamplePage } from '../../common/samplePage'
import { database } from '../../assets/database'
import { columns, formatterOverrides, messageOverrides } from './data'

export const TextOverrideSample = () => {
  return (
    <SamplePage
      headerText="Text Override Sample"
      description={
        <>
          <p>
            All text, including icons tooltips and placeholders, can be overridden. Same
            with date and money formats. This is useful for localization.
          </p>
          <p>
            As this is just a sample, all translations were done using Google Translate.
            The data itself has not been translated.
          </p>
        </>
      }
    >
      <Table
        pluralEntityName="personnes"
        columns={columns}
        data={database.people}
        isSearchable
        tableName="Overriden text"
        showResultCount
        isFilterable
        messageOverrides={messageOverrides}
        formatterOverrides={formatterOverrides}
      />
    </SamplePage>
  )
}
