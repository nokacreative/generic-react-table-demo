import { SortingRule } from '@noka/generic-react-table'
import { ProductModel } from '../../domain/product.model'

export interface ServerSearchParams {
  sortingRules: SortingRule<ProductModel>[]
  pageIndex: number
  pageSize: number
}

export interface ServerResponse {
  products: ProductModel[]
  totalNumPages: number
  totalNumResults: number
}
