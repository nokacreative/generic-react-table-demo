import { database } from '../../assets/database'
import { DataType, SortDirection, SortingRule } from '@nokacreative/generic-react-table'
import { getNestedValue } from '../../common/utils/general'
import { ProductModel } from '../../domain/product.model'
import { ServerResponse, ServerSearchParams } from './models'

function fakeServerSort<ProductModel>(
  rules: SortingRule<ProductModel>[],
  unsortedData: ProductModel[]
) {
  const sortedData = unsortedData.slice()
  rules.forEach((rule) => {
    sortedData.sort((a: ProductModel, b: ProductModel) => {
      const aData = rule.columnDefinition.sortAccessor
        ? rule.columnDefinition.sortAccessor(a)
        : getNestedValue(a, (rule.columnDefinition as any).propertyPath)
      const bData = rule.columnDefinition.sortAccessor
        ? rule.columnDefinition.sortAccessor(b)
        : getNestedValue(b, (rule.columnDefinition as any).propertyPath)
      if (rule.columnDefinition.type === DataType.PLAIN_TEXT) {
        return aData.localeCompare(bData)
      }
      return aData - bData
    })
    if (rule.direction === SortDirection.DESCENDING) {
      sortedData.reverse()
    }
  })
  return sortedData
}

function properPageData(
  products: ProductModel[],
  currentPageIndex: number,
  pageSize: number
): ProductModel[] {
  const dataInCurrentPage = products.slice(
    currentPageIndex * pageSize,
    (currentPageIndex + 1) * pageSize
  )
  if (currentPageIndex === 1) {
    return [
      ...dataInCurrentPage,
      {
        id: '101',
        name: 'Added from server',
        price: 100,
        description:
          'To demonstrate server-side paging--note that the total number of results is still 6, which means that this server needs tweaking!',
        dateAdded: Date.now(),
      },
    ]
  }
  return dataInCurrentPage
}

function fetchProducts(params: ServerSearchParams) {
  return new Promise<ServerResponse>((resolve) => {
    setTimeout(() => {
      const products = (() => {
        if (params.sortingRules.length > 0) {
          return fakeServerSort(params.sortingRules, database.products)
        }
        return database.products
      })()
      resolve({
        products: properPageData(products, params.pageIndex, params.pageSize),
        totalNumPages: Math.ceil(products.length / params.pageSize),
        totalNumResults: 6,
      })
    }, 1000)
  })
}

export const fakeClient = {
  fetchProducts,
}
