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
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"/>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

      </Head>

      <nav className="navbar justify-content-between navbar-dark ">
        <a className="navbar-brand" href="/">STOCKVISION</a>
        <div className="navbar-nav">
          <div className = "nav-item">
            <a className="nav-link">
              {loggedIn ? (
                  <button className="btn btn-light" onClick={login}>Log out</button>
                ) : (
                  <button className="btn btn-light" onClick={login}>Log in</button>
                )
              }
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Header/>

        {loggedIn ? (
          <div className="shinyContainer">
            <iframe src="https://gallery.shinyapps.io/airmass/" className="iframeStyles"/>
          </div>
          ) : (
          <div>
            <div className="bg-light jumbotron">
              <div className = "background-image" id = "bg-1">
              </div>
              <div className="foreground-content">
                <div className="container p-5 text-light">
                  <h1 className="display-5 fw-bold">STOCKVISION</h1>
                  <p className="col-md-4 text">STOCKVISION uses the most advanced machine learning technologies to provide you with accurate stock market predictions</p>
                  <button className="btn btn-light btn-lg mt-4" type="button" onClick={login}>Join now</button>
                </div>
              </div>
            </div>

            <div className="bg-light jumbotron">
              <div className="background-image" id="bg-2">
              </div>
              <div className="foreground-content">
                <div className="container p-5 text-light text-end">
                  <h1 className="display-5 fw-bold">AI IS ON YOUR SIDE</h1>
                  <p className="col-md-12 text text-end">STOCKVISION makes it easy for you to pick the best stocks on the market</p>
                  <br></br>
                  <p className="col-md-12 text text-end">STOCKVISION's advanced machine learning models predict the stock market</p>
                  <br></br>
                  <p className="col-md-12 text text-end">STOCKVISION puts you first</p>
                  <button className="btn btn-light btn-lg mt-4" type="button" onClick={login}>Join now</button>
                  <br></br>
                </div>
              </div>
            </div>

            <div className="bg-light jumbotron">
              <div className = "background-image" id = "bg-3">
              </div>
              <div className="foreground-content">
                <div className="container p-5 text-light">
                  <h1 className="display-5 fw-bold mb-4">TRADE WITH CONFIDENCE</h1>
                  <ul></ul>
                  <p className="col-md-8 text"></p>
                </div>
              </div>
            </div>

            <div className="bg-light jumbotron">
              <div className="background-image" id="bg-4">
              </div>
              <div className="foreground-content">
                <div className="container p-5 text-light text-end">
                  <h1 className="display-5 fw-bold">STOCKVISION IS EASY</h1>
                  <p className="col-md-12 text text-end">STOCKVISION makes it easy for you to pick the best stocks on the market</p>
                  <br></br>
                  <p className="col-md-12 text text-end">STOCKVISION's advanced machine learning models predict the stock market</p>
                  <br></br>
                  <p className="col-md-12 text text-end">STOCKVISION puts you first</p>
                  <button className="btn btn-light btn-lg mt-4" type="button" onClick={login}>Join now</button>
                  <br></br>
                </div>
              </div>
            </div>

            <div className="bg-light jumbotron ">
              <div className = "background-image" id = "bg-5">
              </div>
              <div className="foreground-content d-flex align-items-end">
                <div className="container p-5 text-light">
                  <h1 className="display-5 fw-bold mb-4">JOIN US TODAY</h1>
                  <ul></ul>
                  <p className="col-md-8 text"></p>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
