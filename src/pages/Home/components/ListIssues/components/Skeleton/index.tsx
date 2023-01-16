import './styles.scss'

interface SkeletonProps {
  children: JSX.Element
  isLoading: boolean
}

export function Skeleton({ children, isLoading }: SkeletonProps) {
  if (!isLoading) {
    return children
  }

  return (
    <section className="skeleton-list-issues-container">
      {new Array().fill(null).map((_) => (
        <div className="skeleton-list-issues-box" />
      ))}
    </section>
  )
}
