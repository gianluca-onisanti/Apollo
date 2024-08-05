import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Eai bixão doido
        </p>
        <div>
          <a
            href="https://www.youtube.com/watch?v=0LwcvjNJTuM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eu sou um link
            <Image
              src="/doge.jpg"
              alt="Doge"
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/xablau.png"
          alt="O aplicativo teste"
          width={200}
          height={150}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://github.com/gianluca-onisanti"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            GitHub Gian <span>-&gt;</span>
          </h2>
          <p>Ache, ache informações do criador dessa m....</p>
        </a>

        <a
          href="https://github.com/prisma/prisma/issues/5184"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Busque <span>-&gt;</span>
          </h2>
          <p>Busque conhecimento imediatamente!</p>
        </a>

        <a
          href="https://www.bcb.gov.br/estabilidadefinanceira/historicocotacoes"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Quanto <span>-&gt;</span>
          </h2>
          <p>Quantos lulas tá 1 trump.</p>
        </a>

        <a
          href="https://r.agar.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Saia <span>-&gt;</span>
          </h2>
          <p>
            Saia daqui e vá jogar Agar.io ....
          </p>
        </a>
      </div>
    </main>
  );
}
