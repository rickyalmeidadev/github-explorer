import { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FiChevronRight } from 'react-icons/fi'
import styled, { useTheme } from 'styled-components'

import { Avatar, Button, Card, Column, Head, Row, TextField, Typography } from 'components'
import { ReactComponent as Logo } from 'assets/icons/logo-icon.svg'

import { Repository } from 'interfaces/github'
import { getRepository } from 'services/github'

interface FormData {
  search: string
}

const searchRules = {
  required: {
    value: true,
    message: 'Digite o autor/nome do repositório'
  }
}

const Home: FunctionComponent = () => {
  const theme = useTheme()

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storage = localStorage.getItem('@github-explorer/repositories')
    return storage ? JSON.parse(storage) : []
  })

  const { register, handleSubmit, reset, errors, setError } = useForm<FormData>({
    defaultValues: {
      search: ''
    }
  })

  useEffect(() => {
    localStorage.setItem('@github-explorer/repositories', JSON.stringify(repositories))
  }, [repositories])

  const handleSearch = async ({ search }: FormData) => {
    try {
      const repository = await getRepository(search)
      setRepositories(state => [...state, repository])
      reset()
    } catch (error) {
      const isNotFoundError = error.response?.data?.message === 'Not Found'
      setError('search', {
        type: 'custom',
        message: isNotFoundError ? 'Repositório não encontrado.' : 'Algo de errado aconteceu. ',
        shouldFocus: true
      })
    }
  }

  return (
    <Fragment>
      <Head title="Github Explorer" />
      <Column as="main" width={1} maxWidth={1024} pt={5} mx="auto" px={2}>
        <Row as="section" alignItems="center" mb={100}>
          <Logo />
          <Typography color="gray.600" fontSize={24} fontWeight={500} ml={2}>
            github
          </Typography>
          <Typography color="gray.500" fontSize={24} fontWeight={500}>
            _explorer
          </Typography>
        </Row>
        <Typography as="h1" color="gray.800" fontSize={48} fontWeight={700} mb={5}>
          Explore repositórios
          <br />
          no Github.
        </Typography>
        <Column as="section" maxWidth="700px">
          <Row as="form" onSubmit={handleSubmit(handleSearch)} position="relative" alignItems="center" mb="120px">
            <TextField
              name="search"
              placeholder="Digite aqui"
              ref={register(searchRules)}
              border={errors.search && '1px solid'}
              borderRight={0}
              borderColor={errors.search && 'red.400'}
              borderBottomRightRadius={0}
              borderTopRightRadius={0}
              width={0}
              flex={1}
            />
            <Button borderTopLeftRadius={0} borderBottomLeftRadius={0} bg="primary" flex={1} maxWidth="210px">
              Pesquisar
            </Button>
            {errors.search && (
              <Typography as="span" color="red.400" position="absolute" bottom={-24} left={0}>
                {errors.search.message}
              </Typography>
            )}
          </Row>
          {repositories.map(repository => (
            <Link key={repository.id} to={`/repositories/${repository.full_name}`}>
              <AnimatedCard as="article" flexDirection="row" flex={1} alignItems="center" mb={2}>
                <Avatar src={repository.owner.avatar_url} alt={repository.owner.login} mr={3} />
                <Column justifyContent="center" flex="1px">
                  <Typography color="gray.800" fontSize={24} fontWeight={700} mb={1}>
                    {repository.full_name}
                  </Typography>
                  <Typography color="gray.400" fontSize={18}>
                    {repository.description}
                  </Typography>
                </Column>
                <FiChevronRight color={theme.colors.gray[400]} size={24} />
              </AnimatedCard>
            </Link>
          ))}
        </Column>
      </Column>
    </Fragment>
  )
}

const AnimatedCard = styled(Card)`
  transition: transform 200ms;

  :hover {
    transform: translateX(24px);
  }
`

export default Home
