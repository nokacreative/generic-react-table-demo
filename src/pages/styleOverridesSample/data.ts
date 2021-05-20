import { TableColumn, DataType } from '@noka/generic-react-table'
import { TagModel } from '../../domain/tag.model'

export const columns: TableColumn<TagModel>[] = [
  {
    propertyPath: 'id',
    headerText: 'ID',
    type: DataType.PLAIN_TEXT,
    defaultWidth: '80px',
  },
  {
    propertyPath: 'name',
    headerText: 'Name',
    type: DataType.PLAIN_TEXT,
  },
  {
    propertyPath: 'color',
    headerText: 'Colour',
    type: DataType.COLOR,
    defaultWidth: '100px',
  },
  {
    propertyPath: 'description',
    headerText: 'Description',
    type: DataType.PLAIN_TEXT,
    defaultWidth: '2fr',
  },
]
