import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hey, Yash.</title>
      </Head>

      <main>
        <Header title="Happy Birthday!" />
        <p className="description">
          Someone's turning 30. LOL.
        </p>
      </main>
    </div>
  )
}
