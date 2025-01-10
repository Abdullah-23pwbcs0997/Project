import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./App.module.css";
import BMW_Main_1 from "./BMW_Main_1";
import Merc_Main_1 from "./Merc_Main_1";
import Nissan_Main_1 from "./Nissan_Main_1";

const Main_1 = () => {
  // Hooks for observing different sections
  const { ref: welcomeTextRef, inView: welcomeTextInView } = useInView({
    triggerOnce: true,
  });
  const { ref: bmwRef, inView: bmwInView } = useInView({ triggerOnce: true });
  const { ref: mercRef, inView: mercInView } = useInView({
    triggerOnce: true,
  });
  const { ref: nissanRef, inView: nissanInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      {/* Main Welcome Section */}
      <div
        className={`${styles.bkImage_Main} fade ${
          welcomeTextInView ? "show" : ""
        }`}
        ref={welcomeTextRef}
      >
        <main className="flex-grow-1 py-4">
          <div className="container">
            <h1 className={styles.text_h1}>Welcome to Vehicle Vault</h1>
            <p className={styles.text_p}>
              Your ultimate destination for everything cars! <br /> Vehicle
              Vault is a one-stop platform where you can explore detailed
              information about your favorite cars. Whether you're a car
              enthusiast, researching for your next purchase, or just curious
              about different makes and models, we've got you covered. Discover
              specs, features, and insights on top brands like BMW, Mercedes,
              Nissan, and more. Our user-friendly interface ensures you get the
              information you need—quickly and effortlessly. <br /> Start your
              journey with Vehicle Vault and fuel your passion for cars!
            </p>
          </div>
        </main>
      </div>

      {/* BMW Section */}
      <div ref={bmwRef} className={`fade ${bmwInView ? "show" : ""}`}>
        <BMW_Main_1 />
      </div>

      {/* Mercedes Section */}
      <div ref={mercRef} className={`fade ${mercInView ? "show" : ""}`}>
        <Merc_Main_1 />
      </div>

      {/* Nissan Section */}
      <div ref={nissanRef} className={`fade ${nissanInView ? "show" : ""}`}>
        <Nissan_Main_1 />
      </div>
    </div>
    
  );
};

export default Main_1;
