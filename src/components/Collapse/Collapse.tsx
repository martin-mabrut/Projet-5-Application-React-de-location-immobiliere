import { useRef, useState, useEffect } from 'react';
import styles from './Collapse.module.scss';

type CollapseProps = {
  title: string;
  children: React.ReactNode;
};

function Collapse({ title, children }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  function toggle() {
    setIsOpen(!isOpen);
  }

  useEffect(
    function () {
      if (!contentRef.current) return;
      const el = contentRef.current;
      el.style.maxHeight = isOpen ? el.scrollHeight + 'px' : '0px';
    },
    [isOpen, children]
  );

  return (
    <div className={styles.collapse}>
      <button className={styles.header} onClick={toggle}>
        <span className={styles.title}>{title}</span>
        <i className={`fa-solid fa-chevron-up ${styles.icon} ${isOpen ? styles.iconOpen : ''}`}></i>
      </button>

      <div ref={contentRef} className={styles.content}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
