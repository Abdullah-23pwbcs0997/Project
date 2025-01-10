import styles from "./App.module.css";

const BMW_Main_1 = () => {
  return (
    <div className={styles.bkImage_BMW}>
      <main className="flex-grow-1 py-4">
        <div className="container">
          <h1 className={styles.text_h1}>BMW</h1>
          <p className={styles.text_p}>
            <h2 className={styles.text_h2}>BMW: A Legacy of Excellence</h2>
            BMW, founded in 1916 in Munich, Germany, has evolved from an
            aircraft engine manufacturer to a global symbol of luxury and
            performance. Renowned for engineering precision, BMW introduced
            iconic models like the 3 Series and M Series, setting benchmarks in
            innovation and driving dynamics. <br /> With its tagline, “The
            Ultimate Driving Machine,” BMW embodies a passion for performance,
            style, and sustainability. From its motorsport heritage to
            pioneering electric mobility, BMW continues to blend tradition with
            cutting-edge technology, maintaining its reputation as a leader in
            the automotive world.
          </p>
        </div>
      </main>
    </div>
  );
};

export default BMW_Main_1;
