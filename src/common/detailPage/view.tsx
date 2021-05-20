import { Table, TableColumn } from '@nokacreative/generic-react-table'
import { useHistory, useParams } from 'react-router-dom'

import './styles.scss'

import { IdRouteParams } from '../models'
import { database, Database } from '../../assets/database'

type Props<T> = {
  entityName: string
  dbKey: keyof Database
  columns: TableColumn<T>[]
}

export function DetailPage<T>({ entityName, dbKey, columns }: Props<T>) {
  const { id } = useParams<IdRouteParams>()
  const history = useHistory()

  const model = (database[dbKey] as any[]).find((x) => x.id === id)

  if (!model) {
    return <div>Could not find {entityName}!</div>
  }

  return (
    <div className="detail-page">
      <header>
        <h1>
          {entityName} {id}
        </h1>
      </header>
      <Table columns={columns} data={[model]} />
      <button className="primary" onClick={() => history.goBack()} id="ok-button">
        OK
      </button>
    </div>
  )
}
