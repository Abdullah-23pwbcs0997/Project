import React from "react";
import styles from "./nissan.module.css";

const Nissan = () => {
  return (
    <div className={`${styles.nissanContainer} ${styles.bk_Nissan}`}>
      <div className={styles.headingNissan}>
        Nissan: A Legacy of   Versatility
      </div>

      <div className={styles.buttonContainer}>
        <a
          href="https://www.nissanusa.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.nissanButton}>
            Visit Official NISSAN Website
          </button>
        </a>
      </div>

      {/* GT r35*/}

      <div className={styles.nissanSection}>
        <a
          href="https://www.nissanusa.com/vehicles/sports-cars/gt-r.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/r35.jpg"
            alt="GT r35"
            className={styles.nissanImage}
          />
        </a>
        {/* GT r35 Details */}
        <div className={styles.nissanDetails}>
          <h2 className={styles.nissanTitle}>GT-R r35</h2>
          <p className={styles.nissanDescription}>
            The Nissan GT-R R35 is a legendary high-performance sports car known
            for its 3.8-liter twin-turbo V6 engine, advanced all-wheel-drive
            system, and exceptional handling, making it a benchmark in the world
            of Japanese performance vehicles.
          </p>
          <ul className={styles.nissanSpecs}>
            <li>
              <strong>Engine type:</strong>3.8-liter twin-turbocharged
              V6-VR38DETT
            </li>
            <li>
              <strong>Transmission:</strong>6-speed dual-clutch automatic with
              AWD drive type.
            </li>
            <li>
              <strong>Safety Features:</strong>Traction control, ABS, VDC,
              airbags, rearview camera, and parking sensors.
            </li>
            <li>
              <strong>Interior:</strong>2-seat configuration, leather/Alcantara
              upholstery, Bose audio, dual-zone climate control, and Apple
              CarPlay/Android Auto.
            </li>
            <li>
              <strong>Engine Power:</strong>565 hp -Standard trim / 600 hp-Nismo
              trim
            </li>
            <li>
              <strong>0-60mph:</strong>Approximately 2.9 seconds -varies
              slightly depending on trim and conditions
            </li>
            <li>
              <strong>Price:</strong> Around $115,000 USD-Base to $215,000
              USD-Nismo.
            </li>
            <li>
              <strong>Top Speed:</strong>Around 196 mph /316 km/h
            </li>
          </ul>
        </div>
      </div>

      {/* GT r34*/}

      <div className={styles.nissanSection}>
        <a
          href="https://jdm-expo.com/vehicle-inventory/1206-nissan-skyline-r34-gtr-sale.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/r34.2.jpg"
            alt="GT r34"
            className={styles.nissanImage}
          />
        </a>
        {/* GT r34 Details */}
        <div className={styles.nissanDetails}>
          <h2 className={styles.nissanTitle}>GT-R r34</h2>
          <p className={styles.nissanDescription}>
            The Nissan GT-R R34 Skyline is an iconic sports car powered by a
            2.6-liter twin-turbo inline-six engine, known for its advanced
            technology, exceptional performance, and being a favorite among car
            enthusiasts and tuners, especially for its role in motorsports and
            popular culture.
          </p>
          <ul className={styles.nissanSpecs}>
            <li>
              <strong>Engine type:</strong>2.6-liter twin-turbocharged inline-6
              RB26DETT
            </li>
            <li>
              <strong>Transmission:</strong>5-speed Getrag manual transmission
              with AWD drive type.
            </li>
            <li>
              <strong>Safety Features:</strong>Traction control, ABS, airbags,
              rearview camera (in some trims), and stability control.
            </li>
            <li>
              <strong>Interior:</strong>2+2 seating configuration, cloth or
              leather upholstery, standard audio system, manual air
              conditioning.
            </li>
            <li>
              <strong>Engine Power:</strong>280 hp (officially, but aftermarket
              tuning can increase significantly)
            </li>
            <li>
              <strong>0-60mph:</strong>Approximately 5.5 seconds (varies
              depending on trim and tuning)
            </li>
            <li>
              <strong>Price:</strong> Around $40,000 - $50,000 USD (varies with
              condition, location, and modifications, as the car is now
              discontinued)
            </li>
            <li>
              <strong>Top Speed:</strong>Around 156 mph / 251 km/h (depends on
              modifications)
            </li>
          </ul>
        </div>
      </div>

      {/* Nissan Z*/}

      <div className={styles.nissanSection}>
        <a
          href="https://www.nissanusa.com/vehicles/sports-cars/nissan-z.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/Z.jpg"
            alt="Nissan Z"
            className={styles.nissanImage}
          />
        </a>
        {/* Nissan Z Details */}
        <div className={styles.nissanDetails}>
          <h2 className={styles.nissanTitle}>Nissan Z</h2>
          <p className={styles.nissanDescription}>
            The Nissan Z is a sleek, modern sports car featuring a 3.0-liter
            twin-turbo V6 engine, combining thrilling performance with classic
            design elements, offering an exciting driving experience and
            advanced technology at a more accessible price point in the sports
            car market.
          </p>
          <ul className={styles.nissanSpecs}>
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

export default Nissan;
