/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <main>{children}</main>
      <footer>
        <p className={"font-sans text-sm mb-0 text-center"}>
          Made with <a href={"https://www.gatsbyjs.org"} className={"text-blue-600"}>Gatsby.js</a> and <a href={"https://tailwindcss.com"} className={"text-blue-600"}>Tailwind CSS</a>
        </p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
