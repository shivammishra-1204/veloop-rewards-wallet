import { Info } from 'lucide-react'
import styles from './InfoTooltip.module.css'

function InfoTooltip({ label, children }) {
  return (
    <span className={styles.wrapper}>
      <span
        className={styles.trigger}
        role="img"
        aria-label={label}
      >
        <Info size={14} />
      </span>

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