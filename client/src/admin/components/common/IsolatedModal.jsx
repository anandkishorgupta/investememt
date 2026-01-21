
import styles from './IsolatedModal.module.css';

/**
 * Isolated Modal Component with Black & White Theme
 * Following memory rules:
 * - Wrapped in .press-admin-panel for CSS isolation
 * - Uses only #000000, #FFFFFF, and #E0E0E0
 * - No impact on existing page styles
 */
const IsolatedModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer,
  showCloseButton = true 
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.pressAdminPanel}>
      <div className={styles.overlay} onClick={handleOverlayClick}>
        <div className={styles.modalContainer}>
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            {showCloseButton && (
              <button 
                className={styles.closeButton} 
                onClick={onClose}
                type="button"
                aria-label="Close modal"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            )}
          </div>
          
          <div className={styles.content}>
            {children}
          </div>
          
          {footer && (
            <div className={styles.footer}>
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Form Components 
─────────────────────────────────────────────── */

export const FormGroup = ({ children }) => (
  <div className={styles.formGroup}>{children}</div>
);

export const Label = ({ children, required }) => (
  <label className={styles.label}>
    {children}
    {required && <span className={styles.required}>*</span>}
  </label>
);

export const Input = ({ type = 'text', ...props }) => (
  <input type={type} className={styles.input} {...props} />
);

export const Textarea = ({ rows = 4, ...props }) => (
  <textarea rows={rows} className={styles.textarea} {...props} />
);

export const FileInput = ({ accept = 'image/*', ...props }) => (
  <input type="file" accept={accept} className={styles.fileInput} {...props} />
);

export const PdfInput = ({ ...props }) => (
  <input 
    type="file" 
    accept="application/pdf" 
    className={styles.fileInput} 
    {...props} 
  />
);

export const ImagePreview = ({ src, alt }) => (
  src ? <img src={src} alt={alt} className={styles.imagePreview} /> : null
);

/**
 * New: Radio Group for Invest-related choices
 */
export const InvestRadioGroup = ({ 
  name, 
  value, 
  onChange, 
  options = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ],
  required = false
}) => {
  return (
    <FormGroup>
      <Label required={required}>Invest</Label>
      <div className={styles.radioGroup}>
        {options.map((option) => (
          <label key={option.value} className={styles.radioLabel}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className={styles.radioInput}
              required={required}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </FormGroup>
  );
};

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  ...props 
}) => {
  const className = variant === 'primary' 
    ? `${styles.button} ${styles.buttonPrimary}`
    : `${styles.button} ${styles.buttonSecondary}`;
    
  return (
    <button 
      type={type}
      className={className} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default IsolatedModal;