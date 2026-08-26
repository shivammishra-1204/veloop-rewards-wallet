import { useState } from 'react'

import WalletHeader from '/src/components/WalletHeader/WalletHeader'
import WalletOverview from '/src/components/WalletOverview/WalletOverview'
import WalletSnapshot from '/src/components/WalletSnapshot/WalletSnapshot'
import ActivitySection from '/src/components/ActivitySection/ActivitySection'
import RedeemRewards from '/src/components/RedeemRewards/RedeemRewards'
import TrustSecurity from '/src/components/TrustSecurity/TrustSecurity'

import WalletLoading from '/src/components/WalletStates/WalletLoading/WalletLoading'
import WalletError from '/src/components/WalletStates/WalletError/WalletError'
import WalletEmpty from '/src/components/WalletStates/WalletEmpty/WalletEmpty'

import styles from './Wallet.module.css'

function Wallet() {
  const [walletState, setWalletState] = useState('ready') // 'loading', 'error', 'empty', 'ready'

  const handleRetry = () => {
    setWalletState('loading')

    window.setTimeout(() => {
      setWalletState('ready')
    }, 900)
  }

  if (walletState === 'loading') {
    return (
      <main className={`${styles.walletPage} wallet-page`}>
        <WalletLoading />
      </main>
    )
  }

  if (walletState === 'error') {
    return (
      <main className={`${styles.walletPage} wallet-page`}>
        <WalletError onRetry={handleRetry} />
      </main>
    )
  }

  if (walletState === 'empty') {
    return (
      <main className={`${styles.walletPage} wallet-page`}>
        <WalletEmpty />
      </main>
    )
  }

  return (
    <main className={`${styles.walletPage} wallet-page`}>
      <WalletHeader />
      <WalletOverview />
      <WalletSnapshot />
      <ActivitySection />
      <RedeemRewards />
      <TrustSecurity />
    </main>
  )
}

export default Wallet