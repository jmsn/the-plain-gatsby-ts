import React, { FC } from 'react'
import DefaultLayout from '../layouts/default'
import SEO from '../components/seo'
import { PageProps } from 'gatsby'

const NotFoundPage: FC<PageProps> = () => (
  <DefaultLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </DefaultLayout>
)

export default NotFoundPage
