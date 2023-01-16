import './styles.scss'

interface SkeletonProps {
  children: JSX.Element
  isLoading: boolean
}

export function Skeleton({ children, isLoading }: SkeletonProps) {
  if (!isLoading) {
    return children
  }

  return <section className="skeleton-profile-container">
    <div className="skeleton-profile-box1 loading" />
  </section>
}
