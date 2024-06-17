import React from 'react';
import styles from '../../styles.module.css';

export const OCModalComponent = ({
  message = 'My modal',
  isModalActive = null,
  closeBtnChidlren = null,
  layoutStyle = null,
  modalStyle = null,
  btnStyle = null,
  updateModal = null,
  className = null,
}) => {
  return (
    isModalActive && (
      <section className={styles.blockerActive} style={layoutStyle}>
        <div className={className ?? styles.modalActive} style={modalStyle}>
          {message}
          {closeBtnChidlren !== null ? (
            closeBtnChidlren
          ) : (
            <a className={styles.closeBtn} onClick={updateModal} style={btnStyle}></a>
          )}
        </div>
      </section>
    )
  );
};
