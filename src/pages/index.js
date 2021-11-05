import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/gatsby-astronaut.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Gradinita Alba Ca Zapada"
      style={{ marginBottom: `1.45rem` }}
      />
    <h2>In data de 5 noiembrie Grădinița cu P.P "Albă ca Zăpada" Cluj-Napoca are rata de vaccinare de <span style={{ color: "green" }}>56%</span>.</h2>
    <h3>
      <Link to="/page-2/">Contact</Link> <br />
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
    <Link to="/using-dsg">Go to "Using DSG"</Link> */}
    </h3>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h3>Pagina web in dezvoltare.</h3>
  </Layout>
)

export default IndexPage
