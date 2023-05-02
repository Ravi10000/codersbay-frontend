import styles from "./service-item.module.scss";

import { useState, useRef, useEffect } from "react";

function ServiceItem({ name, children }) {
  const [showDesc, setShowDesc] = useState(false);
  const serviceItemRef = useRef(null);
  useEffect(() => {
    function handleMouseClickOutside(e) {
      if (serviceItemRef && !serviceItemRef.current.contains(e.target)) {
        setShowDesc(false);
      }
    }
    document.addEventListener("mousedown", handleMouseClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleMouseClickOutside);
    };
  }, [serviceItemRef]);
  return (
    <>
      {showDesc && (
        <div className={styles.servicesItem}>
          {/* <div className={styles.serviceName}>
            <p>{name}</p>
            {showDesc && (
              <img
                src="/close.png"
                alt=""
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDesc(false);
                }}
              />
            )}
          </div> */}
        </div>
      )}
      <div
        ref={serviceItemRef}
        onClick={() => setShowDesc(true)}
        className={`${styles.serviceItem} ${
          showDesc && styles.showDescription
        }`}
      >
        <div className={styles.serviceName}>
          <p>{name}</p>
          {showDesc && (
            <img
              src="/close.png"
              alt=""
              onClick={(e) => {
                e.stopPropagation();
                setShowDesc(false);
              }}
            />
          )}
        </div>
        {showDesc && <div className={styles.desc}>{children}</div>}
      </div>
    </>
  );
}

export default ServiceItem;
