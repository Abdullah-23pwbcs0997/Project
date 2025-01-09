import React from "react";
import styles from "./bmw.module.css";

const BMW = () => {
  return (
    <div className={`${styles.bmwContainer} ${styles.bk_bmw}`}>
      <div className={styles.headingBmw}>BMW: A Legacy of Excellence</div>

      <div className={styles.buttonContainer}>
        <a
          href="https://www.bmw.com/en/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.bmwButton}>
            Visit Official BMW Website
          </button>
        </a>
      </div>

      {/* BMW i7 */}
      <div className={styles.bmwSection}>
        <a
          href="https://www.bmwusa.com/vehicles/all-electric/i7/sedan/overview.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/i7.jpg" alt="BMW i7" className={styles.bmwImage} />
        </a>

        {/* BMW i7 Details */}
        <div className={styles.bmwDetails}>
          <h2 className={styles.bmwTitle}>BMW i7</h2>
          <p className={styles.bmwDescription}>
            The BMW i7 is a luxury electric sedan that combines cutting-edge
            technology, exceptional performance, and sustainable design as part
            of BMW's flagship 7 Series lineup.
          </p>
          <ul className={styles.bmwSpecs}>
            <li>
              <strong>Engine type:</strong>Electric motors with dual-motor
              all-wheel drive (AWD), 101.7 kWh battery
            </li>
            <li>
              <strong>Transmission:</strong>Single-speed automatic transmission
              with AWD drive type.
            </li>
            <li>
              <strong>Safety Features:</strong>Traction control, ABS, lane
              departure warning, lane-keeping assist, automatic emergency
              braking, forward collision warning, adaptive cruise control, and
              parking sensors.
            </li>
            <li>
              <strong>Interior:</strong>Luxury 4- or 5-seat configuration,
              leather upholstery, 14.9-inch touchscreen, 12.3-inch digital
              cluster, ambient lighting, heated and ventilated seats, and
              premium audio system.
            </li>
            <li>
              <strong>Engine Power:</strong>536 hp (i7 xDrive60) / 610 hp (i7
              M70 xDrive)
            </li>
            <li>
              <strong>0-60mph:</strong>Approximately 4.5 seconds (i7 xDrive60),
              3.7 seconds (i7 M70 xDrive)
            </li>
            <li>
              <strong>Price:</strong> Around $119,000 USD (i7 xDrive60) to
              $185,000 USD (i7 M70 xDrive).
            </li>
            <li>
              <strong>Top Speed:</strong>Around 155 mph / 250 km/h
            </li>
          </ul>
        </div>
      </div>

      {/* BMW M8 coupe */}
      <div className={styles.bmwSection}>
        <a
          href="https://www.bmwusa.com/vehicles/m-models/m8-coupe/overview.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/m8.jpeg"
            alt="BMW M8 Coupe"
            className={styles.bmwImage}
          />
        </a>

        {/* BMW M8 Coupe Details */}
        <div className={styles.bmwDetails}>
          <h2 className={styles.bmwTitle}>BMW M8</h2>
          <p className={styles.bmwDescription}>
            The BMW M8 Coupe is a high-performance luxury sports car that
            combines breathtaking speed, precision handling, and elegant design
            with a powerful twin-turbocharged V8 engine.
          </p>
          <ul className={styles.bmwSpecs}>
            <li>
              <strong>Engine type:</strong>4.4-liter twin-turbocharged V8 (S63)
            </li>
            <li>
              <strong>Transmission:</strong>8-speed M Steptronic automatic
              transmission with RWD or AWD (xDrive) drive type.
            </li>
            <li>
              <strong>Safety Features:</strong>Traction control, ABS, lane
              departure warning, lane-keeping assist, forward collision warning,
              automatic emergency braking, parking sensors, and adaptive cruise
              control.
            </li>
            <li>
              <strong>Interior:</strong>4-seat configuration, Merino leather
              upholstery, 12.3-inch digital cluster, 10.25-inch touchscreen with
              Apple CarPlay/Android Auto, Harman Kardon surround sound system,
              heated and ventilated seats.
            </li>
            <li>
              <strong>Engine Power:</strong>617 hp (Competition model)
            </li>
            <li>
              <strong>0-60mph:</strong>Approximately 3.0 seconds (Competition
              model)
            </li>
            <li>
              <strong>Price:</strong> Around $130,000 USD (Base) to $145,000 USD
              (Competition model).
            </li>
            <li>
              <strong>Top Speed:</strong>Around 190 mph / 305 km/h
            </li>
          </ul>
        </div>
      </div>

      {/* BMW iX */}
      <div className={styles.bmwSection}>
        <a
          href="https://www.bmwusa.com/vehicles/m-series/m5-series/bmw-m5-sedan.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/m5.webp" alt="BMW iX" className={styles.bmwImage} />
        </a>

        {/* BMW M5 Details */}
        <div className={styles.bmwDetails}>
          <h2 className={styles.bmwTitle}>BMW M5</h2>
          <p className={styles.bmwDescription}>
            The BMW M8 is a high-performance luxury coupe or convertible that
            combines a powerful 4.4-liter twin-turbo V8 engine with precision
            handling, advanced technology, and a premium interior, offering an
            exhilarating driving experience and top-tier comfort.
          </p>
          <ul className={styles.bmwSpecs}>
            <li>
              <strong>Engine type:</strong>4.4-liter twin-turbocharged V8 (S63)
            </li>
            <li>
              <strong>Transmission:</strong>8-speed M Steptronic automatic
              transmission with AWD (xDrive) drive type.
            </li>
            <li>
              <strong>Safety Features:</strong>Traction control, ABS, lane
              departure warning, lane-keeping assist, forward collision warning,
              automatic emergency braking, adaptive cruise control, parking
              sensors, and blind-spot monitoring.
            </li>
            <li>
              <strong>Interior:</strong>5-seat configuration, Merino leather
              upholstery, 12.3-inch digital cluster, 12.3-inch touchscreen with
              Apple CarPlay/Android Auto, Harman Kardon surround sound system,
              heated and ventilated seats, premium materials throughout.
            </li>
            <li>
              <strong>Engine Power:</strong>617 hp (Competition model)
            </li>
            <li>
              <strong>0-60mph:</strong>Approximately 3.1 seconds (Competition
              model)
            </li>
            <li>
              <strong>Price:</strong> Around $105,000 USD (Base) to $115,000 USD
              (Competition model).
            </li>
            <li>
              <strong>Top Speed:</strong>Around 190 mph / 305 km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BMW;
