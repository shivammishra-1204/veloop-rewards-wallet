import {
  Smartphone,
  ShoppingBag,
  PlaySquare,
  WalletCards,
  ArrowRight,
} from 'lucide-react'
import styles from './RedeemRewards.module.css'

const redemptionOptions = [
  {
    id: 'upi',
    title: 'UPI Transfer',
    subtitle: 'Direct to your bank',
    icon: Smartphone,
  },
  {
    id: 'amazon',
    title: 'Amazon Pay',
    subtitle: 'Gift card & shopping',
    icon: ShoppingBag,
  },
  {
    id: 'google',
    title: 'Google Play',
    subtitle: 'Apps & entertainment',
    icon: PlaySquare,
  },
  {
    id: 'paypal',
    title: 'PayPal',
    subtitle: 'Transfer to PayPal',
    icon: WalletCards,
  },
]

function RedeemRewards() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>REWARDS</span>
          <h2>Redeem Your Rewards</h2>
          <p>Choose how you'd like to use your rewards</p>
        </div>
      </div>

      <div className={styles.options}>
        {redemptionOptions.map((option) => {
          const Icon = option.icon

          return (
            <button key={option.id} type="button" className={styles.option}>
              <span className={styles.icon}>
                <Icon size={21} />
              </span>

              <span className={styles.optionText}>
                <strong>{option.title}</strong>
                <small>{option.subtitle}</small>
              </span>
            </button>
          )
        })}
      </div>

      <button type="button" className={styles.redeemButton}>
        <span>Redeem Now</span>
        <ArrowRight size={18} />
      </button>
    </section>
  )
}

export default RedeemRewards
