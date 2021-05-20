import './styles.scss'

type Props = {
  headerText: string
  description: React.ReactNode
  children: React.ReactNode
}

export const SamplePage = ({ headerText, description, children }: Props) => (
  <div className="sample-page">
    <header>
      <h1>{headerText}</h1>
      <div className="description">{description}</div>
    </header>
    {children}
  </div>
)
