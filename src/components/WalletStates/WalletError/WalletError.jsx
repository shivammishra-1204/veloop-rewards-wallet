import { AlertTriangle, RefreshCw } from 'lucide-react'
import styles from './WalletError.module.css'

function WalletError({ onRetry }) {
  return (
    <section
      className={styles.container}
      role="alert"
    >
      <div className={styles.icon}>
        <AlertTriangle size={28} />
      </div>

      <div className={styles.content}>
        <h2>Something went wrong</h2>

        <p>
          We couldn't load your wallet information right now.
          Please try again.
        </p>

        <button
          type="button"
          className={styles.retry}
          onClick={onRetry}
        >
          <RefreshCw size={17} />
          Try Again
        </button>
      </div>
    </section>
  )
}

export default WalletError