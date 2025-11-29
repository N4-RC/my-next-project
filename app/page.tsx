import Image from "next/image";
import styles from "./page.module.css";
import Styles from "./page.module.css"

export default function Home() {
  return(
    <section ClassName={styles.top}>
    <div>
      <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
      <p className={styles.description}>
        私たちは市場をリードしているグローバルっテックカンパニーです。
      </p>
    </div>
    <img ClassName={styles.bgimg} src="/img-mv.jpg" alt="" />
    </section>
  );
}
