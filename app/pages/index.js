import Head from 'next/head'
import Image from 'next/image'
import leaks from './leaks.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          999leaks
        </h1>

        <p>
            All the Juice WRLD leaks in one place
        </p>

        <div className="frcss_cardGrid">
          {leaks.leaks.map((leak, index) => (
            <>
            <a href={leak.audio} className="frcss_card">
              <Image width="200px" height="200px" alt={leak.title} />
            <h3>{leak.title}</h3>
          </a>
          </>
          ))}
          

        </div>
      </main>
    </div>
  )
}
