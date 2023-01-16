import { api } from './api'
import moment from 'moment'

interface Issue {
  number: number
  title: string
  body: string
  created_at: string
}

export class GithubService {
  static async getIssues(search: string) {
    const pathService = `https://api.github.com/search/issues?q=${search}%20repo:qwwerty/github-blog`

    try {
      const { data } = await api.get(pathService)

      const { items } = data

      const relativeTimeFormat = new Intl.RelativeTimeFormat('pt-BR', {
        style: 'narrow',
      })

      const formatedItems = items.map((item: Issue) => {
        const diffDays = moment(item.created_at).diff(new Date(), 'days')

        return {
          ...item,
          created_at: relativeTimeFormat.format(diffDays, 'day'),
        }
      })

      return formatedItems
    } catch (error) {
      console.error(error)
      return []
    }
  }

  static async getIssue(number: number) {
    const pathService = `https://api.github.com/repos/qwwerty/github-blog/issues/${number}`

    try {
      const { data } = await api.get(pathService)

      const relativeTimeFormat = new Intl.RelativeTimeFormat('pt-BR', {
        style: 'narrow',
      })

      const diffDays = moment(data.created_at).diff(new Date(), 'days')

      const responseFormated = {
        ...data,
        created_at: relativeTimeFormat.format(diffDays, 'day')

      }

      return responseFormated
    } catch (error) {
      console.error(error)

      return undefined 
    }
  }
}
