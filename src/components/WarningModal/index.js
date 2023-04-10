import React from 'react';
import styles from './styles.module.css';

const WarningModal = ({ warningText, hideWarning }) => {
  return (
    <div className={styles.warningModalContainer}>
      <p className={styles.warningText}>{warningText}</p>
      <button className={styles.warningButton} onClick={hideWarning}>
        Enter The Luksoverse
      </button>
    </div>
  );
};

export default WarningModal;
