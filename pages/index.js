import Head from 'next/head'
import colors from '../data/colors.json'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Colors!</title>
        <meta name="description" content="App that displays colors to learn Next.js" />
      </Head>
      {
        colors.map(color => (
          <Link href={`/${color.name}`}>
            <h2>{color.name}</h2>
          </Link>
        ))
      }
    </div>
  )
}
