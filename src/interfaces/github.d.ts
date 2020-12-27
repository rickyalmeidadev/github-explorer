export interface Repository {
  description: string
  forks_count: number
  full_name: string
  id: number
  open_issues_count: number
  owner: {
    avatar_url: string
    login: string
  }
  stargazers_count: number
}

export interface Issue {
  html_url: string
  id: number
  title: string
  user: {
    login: string
  }
}
