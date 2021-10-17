import Head from 'next/head'
import Image from 'next/image'
import leaks from './leaks.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>999leaks</title>
        <link rel="icon" href="https://i.imgur.com/vzEMTFM.png" />
      </Head>

      <main>
        <Image src="/api/proxy?url=https://media.discordapp.net/attachments/897633217937559613/899126295181557780/vzEMTFM.png" width="200px" height="200px" alt="999leaks logo" />
        <h1>
          999leaks
        </h1>

        <p>
            999leaks does not host any copyrighted material; all material is hosted by third parties.
        </p>

        <div className="frcss_cardGrid">
          {leaks.leaks.map((leak, index) => (
            <>
            <a href={leak.audio} className="frcss_card">
              <Image width="200px" height="200px" alt={leak.title} src={'/api/proxy?url='+encodeURIComponent(leak.cover)} />
            <h3>{leak.title}</h3>
            <p><b>Juice WRLD</b></p>
            <p>{leak.era} Era</p>
          </a>
          </>
          ))}
          

        </div>
      </main>
    </div>
  )
}
