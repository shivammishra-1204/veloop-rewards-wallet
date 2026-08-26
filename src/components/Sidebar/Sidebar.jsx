import veloopLogo from "../../assets/veloop-logo-transparent.png";
import {
  LayoutDashboard,
  Wallet,
  Gift,
  Users,
  History,
  User,
  Headphones,
  LogOut,
} from 'lucide-react'

import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="sidebar-brand">
        <div className="brand-logo">
          <img src={veloopLogo} alt="VELOOP" />
        </div>

        <div className="brand-text">
          <span>VELOOP</span>
          <span>REWARDS</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav" aria-label="Main navigation">
        <button type="button" className="sidebar-link">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </button>

        <button
          type="button"
          className="sidebar-link active"
          aria-current="page"
        >
          <Wallet size={20} />
          <span>Wallet</span>
        </button>

        <button type="button" className="sidebar-link">
          <Gift size={20} />
          <span>Rewards</span>
        </button>

        <button type="button" className="sidebar-link">
          <Users size={20} />
          <span>Referrals</span>
        </button>

        <button type="button" className="sidebar-link">
          <History size={20} />
          <span>History</span>
        </button>

        <button type="button" className="sidebar-link">
          <User size={20} />
          <span>Profile</span>
        </button>

        <button type="button" className="sidebar-link">
          <Headphones size={20} />
          <span>Support</span>
        </button>
      </nav>

      {/* Logout */}
      <div className="sidebar-bottom">
        <button type="button" className="sidebar-link">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar