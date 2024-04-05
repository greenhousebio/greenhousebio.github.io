import * as React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="mt-2">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
