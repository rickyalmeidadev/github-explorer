import githubApi from 'providers/github'
import { Issue, Repository } from 'interfaces/github'

export const getRepository = async (search: string) => {
  const { data } = await githubApi.get<Repository>(`/repos/${search}`)
  return data
}

export const getRepositoryIssues = async (search: string) => {
  const { data } = await githubApi.get<Issue[]>(`/repos/${search}/issues`)
  return data
}
