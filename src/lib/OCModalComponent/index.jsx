import React from 'react';
import styles from '../../styles.module.css';

/**
 * Simple modal
 * @param message {string} Add your message here.
 * @param isModalActive {boolean} Active the modal.
 * @param layoutStyle {CSSProperties} style css.
 * @param modalStyle {CSSProperties} style css.
 * @param btnStyle {CSSProperties} style css.
 * @param closeBtnChildren {JSX.Element} If it is defined, it adds a JSX component instead the default design.
 * @param closeModal {function} Required. Function to close the modal.
 * @param className {string} add class name if it is defined.
 * @return {null|JSX.Element} Return modal if active.
 * @constructor
 */
export const OCModalComponent = ({
  message = 'My modal',
  isModalActive = null,
  closeBtnChildren = null,
  layoutStyle = null,
  modalStyle = null,
  btnStyle = null,
  closeModal = null,
  className = null,
}) => {
  return (
    isModalActive && (
      <section className={styles.blockerActive} style={layoutStyle}>
        <div className={className ?? styles.modalActive} style={modalStyle}>
          {message}
          {closeBtnChildren !== null ? (
            closeBtnChildren
          ) : (
            <a className={styles.closeBtn} onClick={closeModal} style={btnStyle}></a>
          )}
        </div>
      </section>
    )
  );
};
