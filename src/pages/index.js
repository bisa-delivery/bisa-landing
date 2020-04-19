import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Kadang info di Instagram aja ngga cukup ☹️</h2>
    <ul>
      <li>Nulis di profil jadi nyemak, jadi cuma bisa di post</li>
      <li>Linktree isinya minim banget, mau bikin website ribet :(</li>
    </ul>
    <h2>Branding langsung di depan 🚀</h2>
    <ul>
      <li>Linktr.ee/AB123 atau wa.me/62812xxx tidak cukup keren</li>
      <li>Tapi kalau <a href="">kulacoffee.bisa.delivery</a> keren ngga tuh</li>
      <li>Link bisa kemana aja, nambah WA, IG, Tokped, Grab, Gojek semua bisa</li>
    </ul>
    <h2>Gratisan dulu deh 😬 (apalagi lagi COVID)</h2>
    <ul>
      <li>Visi misinya gampang, yang mau jualan pokoknya dibikin gampang <i><b>dan keren</b></i></li>
      <li>Kita bantuin set up juga nih, masukin link Instagram nya aja dulu: textfield</li>
    </ul>
    <h3>Yang sudah bikin duluan:</h3>
      <ul>
        <li><a href="">otten.bisa.delivery</a></li>
        <li><a href="">otten.bisa.delivery</a></li>
        <li><a href="">otten.bisa.delivery</a></li>
      </ul>
    <p>
      Feedback? Curhat? Monggo di <a href="mailto:kamu@bisa.delivery">email</a> atau <a href="https://www.instagram.com/bisa.delivery/">DM</a> langsung
    </p>

    <Link to="/page-2/">Link</Link>
  </Layout>
)
// <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//   <Image />
// </div>

export default IndexPage
