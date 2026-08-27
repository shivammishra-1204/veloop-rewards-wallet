import { useState } from 'react'
import styles from './ActivitySection.module.css'
import InfoTooltip from '/src/components/InfoTooltip/InfoTooltip'

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
    id: 'VE120',
    icon: Gift,
    title: 'Reward Earned',
    subtitle: 'Watch & Earn',
    value: '+120 VEs',
    time: 'Today, 10:30 AM',
    type: 'positive',
    status: 'Completed',
    date: 'Today, 10:30 AM',
  },
  {
    id: 'WD500',
    icon: ArrowDownToLine,
    title: 'Withdrawal Requested',
    subtitle: 'UPI Transfer',
    value: '-500 VEs',
    time: 'Yesterday, 08:45 PM',
    type: 'negative',
    status: 'Processing',
    date: 'Yesterday, 08:45 PM',
  },
  {
    id: 'RB250',
    icon: Users,
    title: 'Referral Bonus',
    subtitle: 'Friend Joined',
    value: '+250 VEs',
    time: '12 Aug, 04:20 PM',
    type: 'positive',
    status: 'Completed',
    date: '12 Aug, 04:20 PM',
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
  const [expandedId, setExpandedId] = useState(null)

  const handleTransactionClick = (transactionId) => {
    setExpandedId(
      expandedId === transactionId ? null : transactionId
    )
  }

  return (
    <section className={styles.section}>
      {/* Recent Activity */}
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2>Recent Activity</h2>

          <button
            className={styles.viewAll}
            type="button"
          >
            View All
            <ChevronRight size={16} />
          </button>
        </div>

        <div className={styles.activityList}>
          {activities.map((transaction) => {
            const Icon = transaction.icon
            const isExpanded = expandedId === transaction.id

            return (
              <div key={transaction.id}>
                <button
                  type="button"
                  className={styles.transactionRow}
                  onClick={() =>
                    handleTransactionClick(transaction.id)
                  }
                  aria-expanded={isExpanded}
                >
                  <div
                    className={`${styles.activityIcon} ${
                      styles[transaction.type]
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div className={styles.activityInfo}>
                    <strong>{transaction.title}</strong>
                    <span>{transaction.subtitle}</span>
                  </div>

                  <div className={styles.activityMeta}>
                    <strong
                      className={styles[transaction.type]}
                    >
                      {transaction.value}
                    </strong>

                    <div className={styles.statusWithInfo}>
                      <span className={styles.status}>
                        {transaction.status}
                      </span>

                      <InfoTooltip label="Transaction status information">
                        This shows the current status of the
                        reward transaction.
                      </InfoTooltip>
                    </div>

                    <span>{transaction.time}</span>
                  </div>
                </button>

                {/* Transaction Details */}
                {isExpanded && (
                  <div className={styles.transactionDetails}>
                    <p>
                      <strong>Status:</strong>{' '}
                      {transaction.status}
                    </p>

                    <p>
                      <strong>Date:</strong>{' '}
                      {transaction.date}
                    </p>

                    <p>
                      <strong>Reference:</strong>{' '}
                      #{transaction.id}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <button
          className={styles.activityButton}
          type="button"
        >
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
              <button
                className={styles.actionItem}
                key={index}
                type="button"
              >
                <div
                  className={`${styles.actionIcon} ${
                    styles[action.type]
                  }`}
                >
                  <Icon size={19} />
                </div>

                <div className={styles.actionInfo}>
                  <strong>{action.title}</strong>
                  <span>{action.subtitle}</span>
                </div>

                <ChevronRight
                  className={styles.actionArrow}
                  size={18}
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ActivitySection