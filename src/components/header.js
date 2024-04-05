import * as React from "react"
import { MarginLR } from "./margin"

const Header = () => {
  return (
    <MarginLR>
      <header className="flex flex-row items-center h-[60px]">
        <div>
          <h1 className="text-xl font-bold">The Greenhouse</h1>
        </div>
        <nav></nav>
      </header>
    </MarginLR>
  )
}

export default Header
