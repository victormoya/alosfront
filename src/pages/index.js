import React from "react"
import { Layout, Figure, Explanation } from "components"

import "static/scss/all.scss"

const HomePage = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tinci- dunt vel illum dolore eu feugiat nulla facilisis. Y nibh euismod tincidunt vel illum doloredolore eu feugiat nulla facilisis. Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tinci- dunt vel illum dolore eu feugiat nulla facilisis. Y nibh euismod tincidunt vel illum doloredolore eu feugiat nulla."
  return (
    <Layout>
      <Figure src="/images/example1.png" alt="figure_1" />
      <Explanation text={lorem} />
      <Figure src="/images/example2.png" alt="figure_2" />
      <Figure src="/images/example3.png" alt="figure_3" />
      <Figure src="/images/example4.png" alt="figure_4" />
    </Layout>
  )
}

export default HomePage
