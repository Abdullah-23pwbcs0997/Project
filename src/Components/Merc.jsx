import React from "react";
import styles from "./Merc.module.css";

const Merc = () => {
  return (
    <div className={`${styles.MercContainer} ${styles.bk_Merc}`}>
      <div className={styles.headingMerc}>
        Mercedes-Benz: A Heritage of Innovation
      </div>
      <div className={styles.buttonContainer}>
        <a
          href="https://www.mercedes-benz.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.mercButton}>
            Visit Official Mercedes-Benz Website
          </button>
        </a>
      </div>

      {/* S class*/}

      <div className={styles.MercSection}>
        <a
          href="https://www.mercedes-benz.com/en/vehicles/mercedes-maybach/mercedes-maybach-s-class/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/sclass.webp"
            alt="S-Class"
            className={styles.MercImage}
          />
        </a>
        {/* S-class Details */}
        <div className={styles.MercDetails}>
          <h2 className={styles.MercTitle}>The Mercedes‑Maybach S‑Class.</h2>
          <p className={styles.MercDescription}>
            The Mercedes-Maybach S-Class is an ultra-luxury sedan offering
            superior comfort, advanced technology, and refined design. It
            features powerful V8 and V12 engines, along with a lavish interior
            filled with premium materials and cutting-edge amenities. Designed
            for the ultimate driving experience, it combines performance with
            exceptional elegance
          </p>
          <ul className={styles.MercSpecs}>
            <li>
              <strong>Engine type:</strong> 4.0-liter twin-turbocharged V8 or
              6.0-liter twin-turbocharged V12
            </li>
            <li>
              <strong>Transmission:</strong> 9-speed automatic transmission with
              RWD or AWD drive type.
            </li>
            <li>
              <strong>Safety Features:</strong> Traction control, ABS, airbags,
              rearview camera, parking sensors, lane-keeping assist, active
              brake assist, and adaptive cruise control.
            </li>
            <li>
              <strong>Interior:</strong> 4-seat or 5-seat configuration, premium
              leather upholstery, Burmester 3D surround sound system, dual-zone
              automatic climate control, and Apple CarPlay/Android Auto.
            </li>
            <li>
              <strong>Engine Power:</strong> 496 hp - Standard trim / 621 hp -
              Maybach trim (V12)
            </li>
            <li>
              <strong>0-60mph:</strong> Approximately 4.1 seconds - varies
              slightly depending on trim and conditions
            </li>
            <li>
              <strong>Price:</strong> Around $180,000 USD - Base to $200,000 USD
              - Maybach trim.
            </li>
            <li>
              <strong>Top Speed:</strong> Around 155 mph / 250 km/h
              (electronically limited)
            </li>
          </ul>
        </div>
      </div>

      {/* G-wagon */}

      <div className={styles.MercSection}>
        <a
          href="https://www.mercedes-benz.com/en/exclusive/mercedes-benz-magazine/drive-on-the-wild-side/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/g63.webp"
            alt="GT r34"
            className={styles.MercImage}
          />
        </a>
        {/* G-wagon Details */}
        <div className={styles.MercDetails}>
          <h2 className={styles.MercTitle}>Mercedes-AMG G 63</h2>
          <p className={styles.MercDescription}>
            The Mercedes-AMG G 63 is a luxury performance SUV featuring a
            4.0-liter twin-turbo V8 engine with 577 hp. It offers a blend of
            off-road capability, high-end technology, and a luxurious interior.
            Known for its iconic design, it delivers impressive speed and power,
            reaching 0-60 mph in 3.9 seconds.
          </p>
          <ul className={styles.MercSpecs}>
            <li>
              <strong>Engine type:</strong> 4.0-liter twin-turbocharged V8
            </li>
            <li>
              <strong>Transmission:</strong> 9-speed AMG SPEEDSHIFT TCT
              automatic transmission with AWD drive type.
            </li>
            <li>
              <strong>Safety Features:</strong> Traction control, ABS, airbags,
              rearview camera, lane-keeping assist, active brake assist, and
              stability control.
            </li>
            <li>
              <strong>Interior:</strong> 5-passenger seating, leather
              upholstery, Burmester surround sound system, dual-zone automatic
              climate control, and premium interior materials.
            </li>
            <li>
              <strong>Engine Power:</strong> 577 hp (officially), with AMG
              tuning options available for higher outputs.
            </li>
            <li>
              <strong>0-60mph:</strong> Approximately 3.9 seconds.
            </li>
            <li>
              <strong>Price:</strong> Around $160,000 - $170,000 USD (varies
              with condition, location, and optional features).
            </li>
            <li>
              <strong>Top Speed:</strong> Around 149 mph / 240 km/h
              (electronically limited).
            </li>
          </ul>
        </div>
      </div>

      {/* Gt coupe*/}

      <div className={styles.MercSection}>
        <a
          href="https://www.mercedes-amg.com/en/home/vehicles/gt/coupe.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/coupe.jpeg"
            alt="Nissan Z"
            className={styles.MercImage}
          />
        </a>
        {/* gt coupe Details */}
        <div className={styles.MercDetails}>
          <h2 className={styles.MercTitle}>Mercedes-AMG GT Coupé</h2>
          <p className={styles.MercDescription}>
            The Mercedes-AMG GT Coupé is a high-performance sports car featuring
            a powerful 4.0-liter twin-turbo V8 engine. Known for its striking
            design, it offers exceptional handling, advanced technology, and a
            luxurious interior. With impressive acceleration and a top speed
            exceeding 190 mph, it delivers an exhilarating driving experience.
          </p>
          <ul className={styles.MercSpecs}>
            <li>
              <strong>Engine type:</strong>3.0-liter twin-turbocharged V6
              (VR30DDTT)
            </li>
            <li>
              <strong>Transmission:</strong>6-speed manual or 9-speed automatic
              with RWD drive type.
            </li>
            <li>
              <strong>Safety Features:</strong>Traction control, ABS, VDC,
              airbags, rearview camera, forward collision warning, automatic
              emergency braking, and blind-spot monitoring.
            </li>
            <li>
              <strong>Interior:</strong>2-seat configuration, leather and suede
              upholstery, 8-inch digital display, 9-inch touchscreen with Apple
              CarPlay/Android Auto, Bose audio system.
            </li>
            <li>
              <strong>Engine Power:</strong>400 hp
            </li>
            <li>
              <strong>0-60mph:</strong>Approximately 4.0 seconds
            </li>
            <li>
              <strong>Price:</strong> Around $40,000 USD (Base) to $53,000 USD
              (Nismo trim).
            </li>
            <li>
              <strong>Top Speed:</strong>Around 155 mph / 250 km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Merc;
