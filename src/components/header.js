import * as React from "react"
import { MarginLR } from "./margin"

const Header = ({ navbar }) => {
  // TODO: create default navbar
  return (
    <MarginLR>
      <header className="flex flex-row items-center h-[60px]">
        <div>
          <h1 className="text-xl font-bold">The Greenhouse</h1>
        </div>
        <nav>{navbar}</nav>
      </header>
    </MarginLR>
  )
}

export default Header
