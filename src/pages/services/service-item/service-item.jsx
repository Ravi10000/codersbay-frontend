import styles from "./service-item.module.scss";

import { useState, useRef, useEffect } from "react";

function ServiceItem({ sku }) {
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
    <div
      ref={serviceItemRef}
      onClick={() => setShowDesc(true)}
      className={`${styles.serviceItem} ${showDesc && styles.showDescription}`}
    >
      <div className={styles.serviceName}>
        <p>{sku?.name}</p>
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
      <div className={`${styles.desc} `}>
        <p>{sku?.description}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
