import React from "react"
import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"

import "./styles.scss"

const IndexPage = () => {
  //const data = useStaticQuery(query);

  return (
    <Layout seo={[]}>
      <h1>Sebastián Alós</h1>
      <ArticlesComponent articles={[]} />
    </Layout>
  )
}

export default IndexPage
