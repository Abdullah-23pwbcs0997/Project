import styles from "./App.module.css";

const Merc_Main_1 = () => {
  return (
    <div className={styles.bkImage_Merc}>
      <main className="flex-grow-1 py-4">
        <div className="container">
          <h1 className={styles.text_h1}>Mercedes</h1>
          <p className={styles.text_p}>
            <h2 className={styles.text_h2}>
              Mercedes-Benz: A Heritage of Innovation
            </h2>
            Mercedes-Benz, established in 1926, is the epitome of luxury and
            automotive excellence. Known for its groundbreaking innovations like
            the first internal combustion engine and safety systems, the brand
            has consistently set standards in engineering and design. <br />{" "}
            With its slogan, “The Best or Nothing,” Mercedes-Benz delivers a
            seamless blend of performance, luxury, and advanced technology. From
            iconic sedans like the S-Class to cutting-edge electric models, the
            brand remains a symbol of sophistication and leadership in the
            global automotive industry.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Merc_Main_1;
