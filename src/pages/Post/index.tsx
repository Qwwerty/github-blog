import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehpeRaw from 'rehype-raw'
import {
  BsBoxArrowUpRight,
  BsChevronLeft,
  BsFillCalendar2EventFill,
  BsFillChatFill,
  BsGithub,
} from 'react-icons/bs'

import './styles.scss'
import { useEffect, useState } from 'react'
import { GithubService } from '../../services/github'
import moment from 'moment'

interface Issue {
  title: string
  body: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  html_url: string
}

export function Post() {
  const [issue, setIssue] = useState<Issue>({
    title: '',
    body: '',
    user: {
      login: ''
    },
    created_at: '',
    comments: 0,
    html_url: '#'
  })

  const params = useParams()

  async function getIssue() {
    const { number } = params

    if (!number) {
      return
    }

    const responseIssue = await GithubService.getIssue(Number(number))

    if (responseIssue) {
      setIssue(responseIssue)
    }
  }

  useEffect(() => {
    getIssue()
  }, [])

  return (
    <main className="post-container">
      <section className="post-card-wrapper">
        <div className="post-navigation">
          <Link to="/">
            <BsChevronLeft /> <span>VOLTAR</span>
          </Link>
          <a href={issue.html_url} target="_blank">
            VER NO GITHUB <BsBoxArrowUpRight />
          </a>
        </div>

        <p className="post-title">{issue.title}</p>

        <div className="post-info">
          <span>
            <BsGithub /> {issue.user.login}
          </span>
          <span>
            <BsFillCalendar2EventFill /> {issue.created_at}
          </span>
          <span>
            <BsFillChatFill />{' '}
            {issue.comments === 0
              ? `${issue.comments} comentário`
              : `${issue.comments} comentarios`}
          </span>
        </div>
      </section>

      <section className="post-content">
        <ReactMarkdown children={issue.body} rehypePlugins={[rehpeRaw]} />
      </section>
    </main>
  )
}
