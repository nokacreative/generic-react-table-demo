import { TableColumn, DataType } from '@nokacreative/generic-react-table'

interface RichTextOnlyModel {
  a: string
}

export const columns: TableColumn<RichTextOnlyModel>[] = [
  {
    propertyPath: 'a',
    headerText: 'Default',
    type: DataType.RICH_TEXT,
  },
  {
    propertyPath: 'a',
    headerText: 'No Line-breaks',
    type: DataType.RICH_TEXT,
    disallowLineBreaks: true,
  },
  {
    propertyPath: 'a',
    headerText: 'Custom (only <b> allowed)',
    type: DataType.RICH_TEXT,
    sanitizationOptions: {
      allowedTags: ['b'],
    },
  },
  {
    propertyPath: 'a',
    headerText: 'Custom (spans with class attribute allowed)',
    type: DataType.RICH_TEXT,
    sanitizationOptions: {
      allowedTags: ['span'],
      allowedAttributes: {
        span: ['class'],
      },
    },
  },
  {
    propertyPath: 'a',
    headerText: 'Custom (transform <b> into <i>)',
    type: DataType.RICH_TEXT,
    sanitizationOptions: {
      transformTags: { b: 'i' },
    },
  },
]

export const data: RichTextOnlyModel[] = [
  { a: '<b>bold</b><br /><i>italics</i> <u>underline</u>' },
  { a: 'para<p>graph <b>br</b>eak</p>' },
  {
    a: '<span class="rtc-sample-test">span with class (red when allowed)</span>',
  },
]
