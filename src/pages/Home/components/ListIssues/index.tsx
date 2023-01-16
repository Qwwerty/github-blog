import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { GithubService } from '../../../../services/github'
import { Skeleton } from './components/Skeleton'
import './styles.scss'

interface Issue {
  number: number
  title: string
  body: string
  created_at: string
}

interface Issues {
  items: Issue[]
}

interface FormData {
  search: string
}

export function ListIssues() {
  const [isLoading, setIsLoading] = useState(false)
  const [issues, setIssues] = useState<Issue[]>([])

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<FormData>({
    mode: 'onBlur',
  })

  async function handleSearchIssues(data: FormData): Promise<void> {
    setIsLoading(true)
    const { search } = data

    const responseIssues = await GithubService.getIssues(search)
    setIssues(responseIssues)

    setIsLoading(false)
  }

  function handleOpenIssue(number: number) {
    navigate(`/post/${number}`)
  }

  useEffect(() => {
    handleSearchIssues({ search: '' })
  }, [])

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSearchIssues)}
        className="search-container"
      >
        <div>
          <h6>Publicações</h6>
          <span>6 publicações</span>
        </div>

        <input
          {...register('search')}
          type="text"
          placeholder="Buscar conteúdo"
        />
      </form>

      <Skeleton isLoading={isLoading}>
        <div className="list-issues-container">
          {issues.map((issue) => (
            <div
              onClick={() => handleOpenIssue(issue.number)}
              className="list-issues-item"
              key={issue.number}
            >
              <div>
                <span>{issue.title}</span>
                <small>{issue.created_at}</small>
              </div>

              <p>{issue.body}</p>
            </div>
          ))}
        </div>
      </Skeleton>
    </>
  )
}
