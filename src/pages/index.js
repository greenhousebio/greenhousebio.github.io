import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { MarginLR } from "../components/margin"

const Hero = () => {
  return (
    <div>
      <StaticImage
        className="h-[70vh]"
        src="../images/bright-orange.jpg"
        alt="Bright orange pattern"
      />
    </div>
  )
}

const Section = (props) => {
  const classes = `py-10 ${props.classes ?? ""}`
  const styles = props.styles ?? {}

  return (
    <div style={styles} className={classes}>
      {props.children}
    </div>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <MarginLR>
        <Hero />
      </MarginLR>
      <MarginLR>
        <Section>
          <p className="text-8xl">
            A collective for tackling grand challenges.
          </p>
        </Section>
      </MarginLR>
      <Section classes="bg-orange-300" styles={{ minHeight: "200px" }}>
        <MarginLR>
          <p className="text-4xl">How do we </p>
        </MarginLR>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
