import { Coins, Info, Gift, ArrowRight } from 'lucide-react'
import styles from './RewardComposition.module.css'

function RewardComposition() {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <ArrowRight size={16} />
          <span>REWARD COMPOSITION</span>
        </div>

        <Info size={15} />
      </div>

      <div className={styles.rewardList}>
        {/* VE */}
        <div className={styles.rewardItem}>
          <div className={`${styles.iconBox} ${styles.veIcon}`}>
            <Coins size={21} />
          </div>

          <div className={styles.rewardInfo}>
            <strong>VEs (Value Earned)</strong>
            <span>Primary reward currency</span>
          </div>

          <strong className={styles.amount}>3,850</strong>
        </div>

        {/* SVE */}
        <div className={styles.rewardItem}>
          <div className={`${styles.iconBox} ${styles.sveIcon}`}>
            <Coins size={21} />
          </div>

          <div className={styles.rewardInfo}>
            <strong>SVEs (Silver VEs)</strong>
            <span>Secondary reward currency</span>
          </div>

          <strong className={styles.amountSilver}>1,240</strong>
        </div>
      </div>

      <div className={styles.flow}>
        <div className={styles.flowItem}>
          <Coins size={22} className={styles.sveFlowIcon} />
          <span>SVEs</span>
        </div>

        <ArrowRight size={18} />

        <div className={styles.flowItem}>
          <Coins size={22} className={styles.veFlowIcon} />
          <span>VEs</span>
        </div>

        <ArrowRight size={18} />

        <div className={styles.flowItem}>
          <Gift size={22} className={styles.giftIcon} />
          <span>Eligible Rewards</span>
        </div>
      </div>

      <p className={styles.description}>
        SVEs can be converted to VEs as per platform rules.
      </p>
    </section>
  )
}

export default RewardComposition
