import WalletHeader from '/src/components/WalletHeader/WalletHeader'
import WalletOverview from '/src/components/WalletOverview/WalletOverview'
import WalletSnapshot from '/src/components/WalletSnapshot/WalletSnapshot'
import ActivitySection from '/src/components/ActivitySection/ActivitySection'
import RedeemRewards from '/src/components/RedeemRewards/RedeemRewards'
import TrustSecurity from '/src/components/TrustSecurity/TrustSecurity'

function Wallet() {
  return (
    <main className="wallet-page">
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
