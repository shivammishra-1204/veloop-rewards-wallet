import { Coins, Info, Gift, ArrowRight } from 'lucide-react'
import styles from './RewardComposition.module.css'
import useCountUp from '/src/hooks/useCountUp'
import InfoTooltip from '/src/components/InfoTooltip/InfoTooltip'

function RewardComposition() {
  const animatedVEs = useCountUp(3850)
  const animatedSVEs = useCountUp(1240)

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <ArrowRight size={16} />
          <span>REWARD COMPOSITION</span>
        </div>

        <InfoTooltip label="Reward composition information">
          This section shows your VEs and SVEs balances and how they flow toward
          eligible rewards.
        </InfoTooltip>
      </div>

      <div className={styles.rewardList}>
        {/* VE */}
        <div className={styles.rewardItem}>
          <div className={`${styles.iconBox} ${styles.veIcon}`}>
            <Coins size={21} />
          </div>

          <div className={styles.rewardName}>
            <strong>VEs (Value Earned)</strong>

            <InfoTooltip label="VEs information">
              VEs are the primary reward currency in VELOOP Rewards.
            </InfoTooltip>
          </div>

          <span>Primary reward currency</span>

          <strong className={styles.amount}>
            {animatedVEs.toLocaleString()}
          </strong>
        </div>

        {/* SVE */}
        <div className={styles.rewardItem}>
          <div className={`${styles.iconBox} ${styles.sveIcon}`}>
            <Coins size={21} />
          </div>

          <div className={styles.rewardName}>
            <strong>SVEs (Silver VEs)</strong>

            <InfoTooltip label="SVEs information">
              SVEs are the secondary reward currency and can be converted into
              VEs according to platform rules.
            </InfoTooltip>
          </div>

          <span>Secondary reward currency</span>

          <strong className={styles.amountSilver}>
            {animatedSVEs.toLocaleString()}
          </strong>
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
