import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Contact"/>
    <h1>Contact</h1>
    <p>Telefon: 0264-591669</p>
    <p>Email: gradi.albacazapada@yahoo.com</p>
    <p>Adresa: Strada Ion Creanga, nr.4-6, Cluj Napoca</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
