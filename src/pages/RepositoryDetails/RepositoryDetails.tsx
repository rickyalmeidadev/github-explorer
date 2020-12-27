import { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styled, { useTheme } from 'styled-components'

import { Avatar, Card, Column, Head, Row, Typography } from 'components'
import { ReactComponent as Logo } from 'assets/icons/logo-icon.svg'

import { getRepository, getRepositoryIssues } from 'services/github'
import { Issue, Repository } from 'interfaces/github'

interface Params {
  repositoryName: string
}

const RepositoryDetails: FunctionComponent = () => {
  const theme = useTheme()
  const { repositoryName } = useParams<Params>()

  const [repository, setRepository] = useState<Repository | null>(() => {
    const storage = localStorage.getItem(`@github-explorer/repository/${repositoryName}`)
    return storage ? JSON.parse(storage) : null
  })
  const [issues, setIssues] = useState<Issue[]>(() => {
    const storage = localStorage.getItem(`@github-explorer/issues/${repositoryName}`)
    return storage ? JSON.parse(storage) : []
  })

  useEffect(() => {
    const fetch = async () => {
      const [repositoryFromApi, issuesFromApi] = await Promise.all([
        getRepository(repositoryName),
        getRepositoryIssues(repositoryName)
      ])

      setRepository(repositoryFromApi)
      setIssues(issuesFromApi)

      localStorage.setItem(`@github-explorer/repository/${repositoryName}`, JSON.stringify(repositoryFromApi))
      localStorage.setItem(`@github-explorer/issues/${repositoryName}`, JSON.stringify(issuesFromApi))
    }

    if (repositoryName) fetch()
  }, [repositoryName])

  return (
    <Fragment>
      <Head title={repositoryName} />
      <Column as="main" width={1} maxWidth={1024} pt={5} mx="auto" px={2}>
        <Row as="section" alignItems="center" mb={100}>
          <Logo />
          <Typography color="gray.600" fontSize={24} fontWeight={500} ml={2}>
            github
          </Typography>
          <Typography color="gray.500" fontSize={24} fontWeight={500} mr="auto">
            _explorer
          </Typography>
          <Link to="/">
            <FiChevronLeft color={theme.colors.gray[400]} size={20} />
            <Typography color="gray.400" fontSize={16} fontWeight={700}>
              Voltar
            </Typography>
          </Link>
        </Row>
        <Column>
          {repository && (
            <Fragment>
              <Row alignItems="center" mb={5}>
                <Avatar size={120} mr={4} src={repository.owner.avatar_url} alt={repository.owner.login} />
                <Column justifyContent="center">
                  <Typography color="gray.800" fontSize={36} fontWeight={700} mb={2}>
                    {repository.full_name}
                  </Typography>
                  <Typography color="gray.500" fontSize={20}>
                    {repository.description}
                  </Typography>
                </Column>
              </Row>
              <Row mb={80}>
                <Column mr={80}>
                  <Typography as="span" color="gray.800" fontSize={36} fontWeight={700} mb={1}>
                    {repository.stargazers_count}
                  </Typography>
                  <Typography as="span" color="gray.500" fontSize={20}>
                    Stars
                  </Typography>
                </Column>
                <Column mr={80}>
                  <Typography as="span" color="gray.800" fontSize={36} fontWeight={700} mb={1}>
                    {repository.forks_count}
                  </Typography>
                  <Typography as="span" color="gray.500" fontSize={20}>
                    Forks
                  </Typography>
                </Column>
                <Column>
                  <Typography as="span" color="gray.800" fontSize={36} fontWeight={700} mb={1}>
                    {repository.open_issues_count}
                  </Typography>
                  <Typography as="span" color="gray.500" fontSize={20}>
                    Issues abertas
                  </Typography>
                </Column>
              </Row>
            </Fragment>
          )}
          {issues.map(issue => (
            <AnimatedCardAnchor
              key={issue.id}
              as="a"
              href={issue.html_url}
              flexDirection="row"
              alignItems="center"
              mb={2}
              p={3}
            >
              <Column justifyContent="center" flex="1px">
                <Typography color="gray.800" fontSize={24} fontWeight={700} mb={1}>
                  {issue.title}
                </Typography>
                <Typography color="gray.400" fontSize={18}>
                  {issue.user.login}
                </Typography>
              </Column>
              <FiChevronRight color={theme.colors.gray[400]} size={24} />
            </AnimatedCardAnchor>
          ))}
        </Column>
      </Column>
    </Fragment>
  )
}

const AnimatedCardAnchor = styled(Card).attrs({
  as: 'a',
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  transition: transform 200ms;

  :hover {
    transform: translateX(24px);
  }
`

export default RepositoryDetails
