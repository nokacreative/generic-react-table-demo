import { TableColumn, DataType } from '@nokacreative/generic-react-table'
import { TagModel } from '../../domain/tag.model'

export const columns: TableColumn<TagModel>[] = [
  {
    propertyPath: 'id',
    headerText: 'ID',
    type: DataType.PLAIN_TEXT,
    defaultWidth: '100px',
  },
  {
    propertyPath: 'name',
    headerText: 'Name',
    type: DataType.PLAIN_TEXT,
    isSortable: true,
    isResizable: true,
  },
  {
    propertyPath: 'color',
    headerText: 'Colour',
    type: DataType.COLOR,
    defaultWidth: '120px',
  },
  {
    propertyPath: 'description',
    headerText: 'Description',
    type: DataType.PLAIN_TEXT,
    defaultWidth: '2fr',
  },
]
