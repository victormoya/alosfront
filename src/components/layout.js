import React from "react"
import PropTypes from "prop-types"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import "./styles.scss"
import Nav from "./nav"

const Layout = ({ children, seo }) => {
  return (
    <TransformWrapper
      options={{
        limitToBounds: true,
        transformEnabled: true,
        limitToWrapper: true,
      }}
      pan={{
        lockAxisX: false,
        lockAxisY: false,
        velocityEqualToMove: true,
        velocity: true,
      }}
    >
      {({
        resetTransform,
        setDefaultState,
        positionX,
        positionY,
        scale,
        previousScale,
        options: { limitToBounds, transformEnabled, disabled },
        ...rest
      }) => (
        <TransformComponent>
          <Nav />
        </TransformComponent>
      )}
    </TransformWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
