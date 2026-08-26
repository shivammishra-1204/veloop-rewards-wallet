import styles from './WalletLoading.module.css'

function WalletLoading() {
  return (
    <section
      className={styles.loading}
      aria-label="Loading wallet information"
      aria-busy="true"
    >
      <div className={styles.heroSkeleton}>
        <div className={styles.lineLarge} />
        <div className={styles.lineMedium} />
        <div className={styles.lineSmall} />
      </div>

      <div className={styles.stats}>
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
      </div>

      <div className={styles.activity}>
        <div className={styles.activityHeader} />

        <div className={styles.activityRow} />
        <div className={styles.activityRow} />
        <div className={styles.activityRow} />
      </div>
    </section>
  )
}

export default WalletLoading