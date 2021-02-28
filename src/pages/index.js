import React from "react"
import { Layout, Figure } from "components"

import "static/scss/all.scss"

const HomePage = () => {
  return (
    <Layout>
      <Figure src="/images/example1.png" alt="figure_1" />
      <Figure src="/images/example2.png" alt="figure_2" />
      <Figure src="/images/example3.png" alt="figure_3" />
      <Figure src="/images/example4.png" alt="figure_4" />
    </Layout>
  )
}

export default HomePage
