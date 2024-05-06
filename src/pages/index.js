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
            A collective for tackling the climate crisis.
          </p>
        </Section>
      </MarginLR>
      <Section classes="bg-orange-200" styles={{ minHeight: "200px" }}>
        <MarginLR>
          <p className="text-3xl mb-4">
            We bring together cohorts of engineers, scientists, and designers to
            build solutions to climate change.
          </p>
          <p className="text-3xl mb-4">Through our one-year program,</p>
        </MarginLR>
      </Section>
      {/* <Section styles={{ minHeight: "200px" }}>
        <MarginLR>
          <p className="text-3xl">
            Interested? We're currently recruiting our first cohort (start of
            Fall 2024 &ndash; end of Summer 2025). Apply now.
          </p>
        </MarginLR>
      </Section> */}
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
