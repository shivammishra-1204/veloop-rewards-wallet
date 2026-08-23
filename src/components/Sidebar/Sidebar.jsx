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
        <div className="brand-logo">V</div>

        <div className="brand-text">
          <span>VELOOP</span>
          <span>REWARDS</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <a href="#" className="sidebar-link">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>

        <a href="#" className="sidebar-link active">
          <Wallet size={20} />
          <span>Wallet</span>
        </a>

        <a href="#" className="sidebar-link">
          <Gift size={20} />
          <span>Rewards</span>
        </a>

        <a href="#" className="sidebar-link">
          <Users size={20} />
          <span>Referrals</span>
        </a>

        <a href="#" className="sidebar-link">
          <History size={20} />
          <span>History</span>
        </a>

        <a href="#" className="sidebar-link">
          <User size={20} />
          <span>Profile</span>
        </a>

        <a href="#" className="sidebar-link">
          <Headphones size={20} />
          <span>Support</span>
        </a>
      </nav>

      {/* Logout */}
      <div className="sidebar-bottom">
        <a href="#" className="sidebar-link">
          <LogOut size={20} />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  )
}

export default Sidebar
