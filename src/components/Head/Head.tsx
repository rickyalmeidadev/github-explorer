import { Fragment, FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTheme } from 'styled-components'

interface Props {
  description?: string
  image?: string
  title: string
}

const Head: FunctionComponent<Props> = ({ description, image, title }) => {
  const { colors } = useTheme()

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="theme-color" content={colors.primary} />
      <meta name="msapplication-TileColor" content={colors.primary} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && (
        <Fragment>
          <meta property="og:image" content={image} />
          <meta property="og:image:secure_url" content={image} />
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:image:src" content={image} />
          <meta name="twitter:image:alt" content="Thumbnail" />
          <meta name="twitter:image:width" content="1200" />
          <meta name="twitter:image:height" content="620" />
        </Fragment>
      )}
    </Helmet>
  )
}

export default Head
