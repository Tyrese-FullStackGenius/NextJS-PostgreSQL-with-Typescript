import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Step Addition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={styles.title}>
          <a href="/">Step Addition</a>
        </h1>
      </header>

      <main className="main">
        <div className={styles.input_number}>
          <div>First Number:&nbsp;</div>
          <input type="number" />
        </div>

        <div className={styles.input_number}>
          <div>Second Number:&nbsp;</div>
          <input type="number" />
        </div>

        <div className={styles.generate_button}>
          <button>Generate Steps</button>
        </div>

        <div className={styles.display_step}>
          <p>Steps</p>
        </div>

        <div className={styles.save_button}>
          <button>Save Results to DB</button>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5vh 20vw;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 90vh;
          width: 100vw;
          overflow-y: auto;
          font-size: 16px;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
