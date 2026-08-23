import styles from './ActivitySection.module.css'
import {
  Gift,
  ArrowDownToLine,
  Users,
  ChevronRight,
  Clock3,
  Star,
} from 'lucide-react'

const activities = [
  {
    icon: Gift,
    title: 'Reward Earned',
    subtitle: 'Watch & Earn',
    value: '+120 VEs',
    time: 'Today, 10:30 AM',
    type: 'positive',
  },
  {
    icon: ArrowDownToLine,
    title: 'Withdrawal Requested',
    subtitle: 'UPI Transfer',
    value: '-500 VEs',
    time: 'Yesterday, 08:45 PM',
    type: 'negative',
  },
  {
    icon: Users,
    title: 'Referral Bonus',
    subtitle: 'Friend Joined',
    value: '+250 VEs',
    time: '12 Aug, 04:20 PM',
    type: 'positive',
  },
]

const actions = [
  {
    icon: Gift,
    title: 'Redeem Rewards',
    subtitle: 'Withdraw or redeem your VEs',
    type: 'purple',
  },
  {
    icon: Clock3,
    title: 'View History',
    subtitle: 'See all your transactions',
    type: 'blue',
  },
  {
    icon: Star,
    title: 'Earn More',
    subtitle: 'Explore ways to earn VEs',
    type: 'gold',
  },
]

function ActivitySection() {
  return (
    <section className={styles.section}>
      {/* Recent Activity */}
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2>Recent Activity</h2>

          <button className={styles.viewAll}>
            View All
            <ChevronRight size={16} />
          </button>
        </div>

        <div className={styles.activityList}>
          {activities.map((activity, index) => {
            const Icon = activity.icon

            return (
              <div className={styles.activityItem} key={index}>
                <div
                  className={`${styles.activityIcon} ${styles[activity.type]}`}
                >
                  <Icon size={18} />
                </div>

                <div className={styles.activityInfo}>
                  <strong>{activity.title}</strong>
                  <span>{activity.subtitle}</span>
                </div>

                <div className={styles.activityMeta}>
                  <strong className={styles[activity.type]}>
                    {activity.value}
                  </strong>
                  <span>{activity.time}</span>
                </div>
              </div>
            )
          })}
        </div>

        <button className={styles.activityButton}>
          View All Activity
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Quick Actions */}
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2>Quick Actions</h2>
        </div>

        <div className={styles.actionList}>
          {actions.map((action, index) => {
            const Icon = action.icon

            return (
              <button className={styles.actionItem} key={index}>
                <div className={`${styles.actionIcon} ${styles[action.type]}`}>
                  <Icon size={19} />
                </div>

                <div className={styles.actionInfo}>
                  <strong>{action.title}</strong>
                  <span>{action.subtitle}</span>
                </div>

                <ChevronRight className={styles.actionArrow} size={18} />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ActivitySection
