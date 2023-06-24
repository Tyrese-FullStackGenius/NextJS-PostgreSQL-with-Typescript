import { useState } from "react";
import Head from "next/head";
import { toast } from "react-toastify";
import { submitNumbers, saveResult } from "../utils/apiHelper";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [steps, setSteps] = useState({});

  const submitNumbersFunc = () => {
    submitNumbers(num1, num2).then((res) => {
      if (res.statusText === "OK" && res.data.statusText === "OK") {
        setSteps(res.data.steps);
      } else {
        toast.error("Submit Error!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    });
  };

  const saveResultFunc = () => {
    saveResult(steps).then((res) => {
      if (res.statusText === "Created" && res.data.statusText === "OK") {
        toast.success("Save Saved!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      } else {
        toast.error("Save Error!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    });
  };

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
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
          />
        </div>

        <div className={styles.input_number}>
          <div>Second Number:&nbsp;</div>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
          />
        </div>

        <div className={styles.generate_button}>
          <button onClick={() => submitNumbersFunc()}>Generate Steps</button>
        </div>

        <div className={styles.display_step}>
          <p>Steps</p>
        </div>

        <div className={styles.save_button}>
          <button onClick={() => saveResultFunc()}>Save Results to DB</button>
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
