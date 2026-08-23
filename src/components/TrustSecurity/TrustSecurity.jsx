import { ShieldCheck, LockKeyhole, BadgeCheck, Clock3 } from 'lucide-react'
import styles from './TrustSecurity.module.css'

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    description: 'Protected transactions',
  },
  {
    icon: LockKeyhole,
    title: 'Data Protected',
    description: 'Your information is secure',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Transactions',
    description: 'Trusted reward processing',
  },
  {
    icon: Clock3,
    title: '24 Hour Processing',
    description: 'Fast reward processing',
  },
]

function TrustSecurity() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>TRUST & SECURITY</span>
          <h2>Your rewards are in safe hands</h2>
        </div>

        <ShieldCheck className={styles.headerIcon} size={28} />
      </div>

      <div className={styles.items}>
        {trustItems.map((item) => {
          const Icon = item.icon

          return (
            <div className={styles.item} key={item.title}>
              <div className={styles.iconBox}>
                <Icon size={19} />
              </div>

              <div className={styles.content}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TrustSecurity
