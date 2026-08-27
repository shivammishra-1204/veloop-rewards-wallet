import { Info } from 'lucide-react'
import styles from './InfoTooltip.module.css'

function InfoTooltip({ label, children }) {
  return (
    <span className={styles.wrapper}>
      <button
        type="button"
        className={styles.trigger}
        aria-label={label}
      >
        <Info size={14} />
      </button>

      <span
        className={styles.tooltip}
        role="tooltip"
      >
        {children}
      </span>
    </span>
  )
}

export default InfoTooltip