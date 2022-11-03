import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

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
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

      </Head>

      <main>
        <Header text={'Welcome to the Public Space™'} />
        <p className="description">
          We are in a public space, for the people who aren't able to access the super fancy
          members-only area. You hear snobbish laughter in the distance.
        </p>
        {loggedIn ? (
          <div>
            You're logged in! Please do visit{' '}
            <Link href="/protected">
              <a>the special, members-only space.</a>
            </Link>
          </div>
        ) : (
          <button onClick={login}>Log in here to access the members-only area.</button>
        )}
      </main>

      <Footer />
    </div>
  )
}
