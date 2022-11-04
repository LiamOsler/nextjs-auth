import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import netlifyAuth from '../netlifyAuth.js'


export default function Home() {
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)

  useEffect(() => {
    let isCurrent = true
    netlifyAuth.initialize((user) => {
      if (isCurrent) {
        setLoggedIn(!!user)
      }
    })

    return () => {
      isCurrent = false
    }
  }, [])

  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user)
    })
  }


  return (
    <div className="container-fluid">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"/>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

      </Head>

      <main>
        <Header/>
        {loggedIn ? (
          <div className="shinyContainer">
            <iframe src="https://gallery.shinyapps.io/airmass/" className="iframeStyles"/>
          </div>
          ) : (
          <div>
            <div>
              Please log in!
            </div>
            <div>
              <button onClick={login}>Log in here to access the members-only area.</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
