import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HypnoCode Productions LLC</title>
        <meta name="description" content="HypnoCode Productions LLC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1 className={styles.title}>
            HypnoCode Productions LLC
          </h1>

          <p className={styles.description}>
            A Limited Liability Corporation to roll up my different ventures under.
          </p>

          <p className={styles.smDescr}>
            You can email me at <a href="mailto:support@hypnocode.pro" rel="author">support@hypnocode.pro</a>.
          </p>

        </section>
        <section>
          <h2>Current Ventures</h2>
          <ul className={styles.ventures}>
            <li>
              <a href="https://terrainium.io" rel="external">
                <div>
                  <Image src="/terrainium.webp" width="75" height="75" alt="Terrainium.io" />
                </div>
                <div>Terrainium.io - A online marketplace for TTRPG Terrain</div>
              </a>
            </li>
            <li>
              <a href="https://cltrpg.com" rel="external">
                <div>
                  <Image src="/cltrpg.webp" width="75" height="75" alt="CLTRPG.com" />
                </div>
                <div>CLTRPG.com - The Carolina Roleplayers’ Society</div>
              </a>
            </li>
            <li>
              <a href="https://agentsofsyn.com" rel="external">
                <div>
                  <Image src="/aos.webp" width="75" height="75" alt="Agents of Syn" />
                </div>
                <div>Agents of Syn - A TTRPG living world based in Crystal Heart</div>
              </a>
            </li>
          </ul>

          <p className={styles.smDescr}>
            You can find more about me and some of my other projects on my homepage, <a href="https://mawburn.com" rel="author external">mawburn.com</a>.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        &copy; HypnoCode Productions LLC
      </footer>
    </div>
  )
}

export default Home
