import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import Topbar from "../components/topbar"

import "../../static/scss/all.scss"

const HomePage = () => {
  return (
    <>
      <Topbar />
      <Layout>
        <img src={"/images/example1.png"} alt="fig1" />
        <img src={"/images/example2.png"} alt="fig2" />
        <img src={"/images/example3.png"} alt="fig3" />
        <img src={"/images/example4.png"} alt="fig4" />
      </Layout>
    </>
  )
}

export default HomePage
