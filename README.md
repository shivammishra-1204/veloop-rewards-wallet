# VELOOP Rewards Wallet

A premium fintech-inspired wallet dashboard for VELOOP Rewards, redesigned to provide a clear and modern experience for managing reward balances, activity, estimated value, and wallet actions.

## Project Overview

The VELOOP Rewards Wallet is a complete frontend redesign of the wallet experience.

The goal of the redesign is to transform the wallet from a simple balance page into a structured reward-management hub where users can quickly understand:

* What rewards they have
* How much their rewards are approximately worth
* Where their rewards came from
* What actions they can take
* What is happening with their transactions
* How their VE and SVE balances relate to eligible rewards

The original wallet information and functionality were preserved while the visual experience, hierarchy, interactions, and responsive behavior were redesigned.

## Wallet Features

### Wallet Overview

The wallet provides a clear high-level view of the user's reward balances and estimated value.

### Available VEs

VEs are the primary virtual reward currency displayed in the wallet.

The interface provides:

* Available VE balance
* Count-up animation
* Information tooltip
* Clear visual hierarchy

### Available SVEs

SVEs represent Silver VEs and are presented as a separate reward balance.

The SVE experience uses a subtle silver visual treatment to distinguish it from standard VEs.

### Reward Relationship

The wallet communicates the relationship:

**SVEs → VEs → Eligible Rewards**

This helps users understand how the two reward balances relate to the reward ecosystem.

### Estimated Value

The wallet provides an estimated reward value as a reference.

It is intentionally presented as an estimate rather than implying that VEs always have a fixed redemption value.

### Recent Activity

The activity section displays wallet transactions including:

* Reward earned
* Withdrawal requested
* Referral bonus
* Transaction value
* Transaction time
* Transaction status

Transactions can be expanded to reveal additional details.

### Quick Actions

The wallet provides compact actions for common reward-related activities such as:

* Redeem Rewards
* View History
* Earn More

### Refresh Interaction

The wallet includes a refresh interaction with a loading animation.

### Information Tooltips

Contextual information is available for reward concepts and transaction status.

### Trust & Security Section

A dedicated trust section communicates wallet transparency through:

* Clear reward tracking
* Transaction visibility
* Redemption tracking
* Reward activity

No unsupported security claims are presented.

## VEs and SVEs

### VEs

VEs are the primary virtual reward currency of VELOOP Rewards and may be used toward eligible redemption options according to applicable platform rules.

### SVEs

SVEs, or Silver VEs, are a secondary reward currency within VELOOP Rewards that can be converted into VEs according to applicable platform rules.

The SVE balance is visually differentiated from the VE balance to make the relationship easier to understand.

## Technology Stack

* React.js
* Vite
* JavaScript
* CSS Modules
* React Hooks
* Lucide React
* HTML5
* CSS3

## Installation

Clone the repository:

```bash
git clone https://github.com/shivammishra-1204/veloop-rewards-wallet.git
```

Navigate into the project:

```bash
cd veloop-rewards-wallet
```

Install dependencies:

```bash
npm install
```

## Development Commands

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Folder Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── ActivitySection/
│   ├── RedeemRewards/
│   ├── Sidebar/
│   ├── TrustSecurity/
│   ├── WalletHeader/
│   ├── WalletOverview/
│   │   ├── EstimatedValue/
│   │   └── RewardComposition/
│   ├── WalletSnapshot/
│   └── InfoTooltip/
│
├── hooks/
│   └── useCountUp.js
│
├── pages/
│   └── Wallet/
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Component Architecture

The wallet is divided into reusable React components rather than placing the entire interface inside a single component.

### WalletHeader

Responsible for:

* Wallet title
* Supporting description
* Refresh interaction
* Header actions
* Profile area

### WalletOverview

Responsible for the main reward overview.

It contains:

* Estimated Value
* Reward Composition

### WalletSnapshot

Displays wallet statistics and summary information.

### ActivitySection

Responsible for:

* Recent activity
* Transaction information
* Expandable transaction details
* Transaction status information
* Quick actions

### RedeemRewards

Provides the reward redemption area.

### TrustSecurity

Provides the wallet trust and transparency section.

### InfoTooltip

Reusable contextual information component used throughout the wallet.

## Responsive Design

The wallet is designed to support:

* Mobile: 320px+
* Tablet: 768px+
* Laptop: 1280px+
* Desktop: 1440px+
* Large screens: 1920px+

The mobile layout prioritizes:

1. Wallet Header
2. Main Balance
3. VE/SVE statistics
4. Quick Actions
5. Wallet Activity
6. Additional Information

The design avoids horizontal scrolling and maintains readable typography and touch-friendly controls.

## Animation Details

Animations are intentionally subtle and product-focused.

### Balance Count-Up

Wallet balances animate from zero to their displayed values when the page loads.

### Refresh Animation

The refresh control provides visual feedback while the wallet is being refreshed.

### Transaction Expansion

Transaction rows expand to reveal additional transaction details.

### Hover States

Cards and actions provide subtle visual feedback on interaction.

### Tooltip Interaction

Information icons reveal contextual explanations without overwhelming the interface.

## Accessibility

The interface includes:

* Accessible button labels
* Keyboard-focus states
* Focus-visible outlines
* Readable typography
* Sufficient contrast
* Touch-friendly controls
* Meaningful icons
* Reduced-motion support

Information is not communicated through color alone.

## Screenshots

Screenshots should be added to the repository under:

```text
screenshots/
```

Recommended screenshots:

* Desktop Wallet
* Tablet Wallet
* Mobile Wallet
* VEs section
* SVEs section
* Wallet overview
* Transaction section
* Empty state
* Loading state
* Error state
* Interactive states

## Live Demo

Live deployment:

https://veloop-rewards-wallet.vercel.app/

## GitHub Repository

https://github.com/shivammishra-1204/veloop-rewards-wallet

## Author

**Shivam Mishra**

Frontend Developer / Learner

Built as a frontend development assignment focused on React component architecture, responsive UI design, accessibility, interaction design, and production deployment.
