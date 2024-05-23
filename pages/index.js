import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hey, Yash.</title>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Someone's turning 30. LOL.
        </p>
      </main>

      <Footer />
    </div>
  )
}
