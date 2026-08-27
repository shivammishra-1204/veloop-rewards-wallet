import { useState } from 'react'
import { RefreshCw, Copy, Bell } from 'lucide-react'

import './WalletHeader.css'

function WalletHeader() {
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    if (refreshing) return

    setRefreshing(true)

    window.setTimeout(() => {
      setRefreshing(false)
    }, 800)
  }

  return (
    <header className="wallet-header">
      <div className="wallet-header-title">
        <h1>My Wallet</h1>

        <p>Your rewards, value and activity in one place</p>
      </div>

      <div className="wallet-header-actions">
        <button
          type="button"
          onClick={handleRefresh}
          disabled={refreshing}
          aria-label={refreshing ? 'Refreshing wallet' : 'Refresh wallet'}
          className={
            refreshing ? 'refresh-button refreshing' : 'refresh-button'
          }
        >
          <RefreshCw size={17} />
        </button>

        <button
          type="button"
          className="header-icon-button"
          aria-label="Copy"
        >
          <Copy size={18} />
        </button>

        <button
          type="button"
          className="header-icon-button notification-button"
          aria-label="Notifications"
        >
          <Bell size={19} />

          <span className="notification-dot"></span>
        </button>

        <div className="header-profile">
          <div className="profile-avatar">U</div>
        </div>
      </div>
    </header>
  )
}

export default WalletHeader