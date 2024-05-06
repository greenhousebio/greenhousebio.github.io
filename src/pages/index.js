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
            A collective for tackling global challenges.
          </p>
        </Section>
      </MarginLR>
      <Section classes="bg-orange-200" styles={{ minHeight: "200px" }}>
        <MarginLR>
          <p className="text-3xl mb-8">
            Big problems can't be solved by any single person. We bring together
            engineers, scientists, and designers to build solutions to global
            challenges, starting with climate change.
          </p>
          <p className="text-3xl mb-8">
            Our goal is simple: deeply understand the problem space and broadly
            explore the solution space, then form teams to execute the most
            promising strategies.
          </p>
          <p className="text-3xl mb-8">
            By convening builders across a range of disciplines, we can
            capitalize on a breadth of technical capabilities and minimize their
            individual limitations.
          </p>
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
