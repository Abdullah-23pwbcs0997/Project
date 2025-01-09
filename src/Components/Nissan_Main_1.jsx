import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Nissan_Main_1 = () => {
  return (
    <div className={styles.bkImage_Nissan}>
      <main className="flex-grow-1 py-4">
        <div className="container">
          <h1 className={styles.text_h1}>Nissan</h1>
          <p className={styles.text_p}>
            <h2 className={styles.text_h2}>Nissan: A Legacy of Versatility</h2>
            Founded in 1933, Nissan has grown into a global powerhouse known for
            innovation, reliability, and accessibility. From pioneering electric
            vehicles with the Nissan LEAF to producing legendary sports cars
            like the GT-R, Nissan offers a versatile range of vehicles to suit
            every driver. <br /> Guided by its vision of “Innovation that
            Excites,” Nissan combines advanced technology with forward-thinking
            design. The brand’s commitment to sustainability and performance
            ensures its lasting impact in the ever-evolving automotive world.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Nissan_Main_1;
