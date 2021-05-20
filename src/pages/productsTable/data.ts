import { TableColumn, DataType } from '@nokacreative/generic-react-table'
import { ProductModel } from '../../domain/product.model'

export const columns: TableColumn<ProductModel>[] = [
  {
    propertyPath: 'id',
    headerText: 'ID',
    type: DataType.PLAIN_TEXT,
    defaultWidth: '70px',
  },
  {
    propertyPath: 'name',
    headerText: 'Name',
    type: DataType.PLAIN_TEXT,
  },
  {
    propertyPath: 'description',
    headerText: 'Description',
    type: DataType.PLAIN_TEXT,
  },
  {
    propertyPath: 'price',
    headerText: 'Price',
    type: DataType.MONEY,
    defaultWidth: 'min-content',
  },
  {
    propertyPath: 'dateAdded',
    headerText: 'Date Added',
    type: DataType.DATE,
    showTime: true,
  },
]
