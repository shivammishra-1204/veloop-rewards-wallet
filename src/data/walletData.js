export const walletData = {
  balance: {
    ves: 3850,
    sves: 1240,
    estimatedValue: '₹25.67',
  },

  wallet: {
    status: 'Active',
    lastUpdated: 'Just now',
  },

  transactions: [
    {
      id: 1,
      type: 'earned',
      title: 'Reward earned',
      description: 'Referral reward',
      amount: '+250 VEs',
      date: 'Today',
      status: 'Completed',
    },
    {
      id: 2,
      type: 'earned',
      title: 'Reward earned',
      description: 'Daily activity',
      amount: '+150 VEs',
      date: 'Yesterday',
      status: 'Completed',
    },
    {
      id: 3,
      type: 'redeemed',
      title: 'Reward redeemed',
      description: 'Reward redemption',
      amount: '-500 VEs',
      date: '18 Aug 2026',
      status: 'Completed',
    },
  ],
}