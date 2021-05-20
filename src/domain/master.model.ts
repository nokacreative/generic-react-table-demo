export interface MasterModel {
  plainText: string
  richText: string
  relation: string
  date: {
    min: number
    max: number
    exact: number
  }
  custom: string
  numberMin: number
  numberMax: number
  numberRanged: number
  moneyMin: number
  moneyMax: number
  color: string
}
