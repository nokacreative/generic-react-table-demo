import { TableColumn, DataType, SortDirection } from '@noka/generic-react-table'
import { ProductModel } from '../../domain/product.model'

export const DEFAULT_PAGE_SIZE = 5

export const columns: TableColumn<ProductModel>[] = [
  {
    propertyPath: 'id',
    headerText: 'ID',
    type: DataType.NUMBER,
    defaultWidth: '70px',
    isSortable: true,
    defaultSortDirection: SortDirection.ASCENDING,
  },
  {
    propertyPath: 'name',
    headerText: 'Name',
    type: DataType.PLAIN_TEXT,
    isSortable: true,
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
    isSortable: true,
  },
  {
    propertyPath: 'dateAdded',
    headerText: 'Date Added',
    type: DataType.DATE,
    isSortable: true,
  },
]
