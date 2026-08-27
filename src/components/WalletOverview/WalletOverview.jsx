import EstimatedValue from './EstimatedValue/EstimatedValue'
import RewardComposition from './RewardComposition/RewardComposition'
import styles from './WalletOverview.module.css'

function WalletOverview() {
  return (
    <section className={styles.overview}>
      <EstimatedValue />
      <RewardComposition />
    </section>
  )
}

export default WalletOverview