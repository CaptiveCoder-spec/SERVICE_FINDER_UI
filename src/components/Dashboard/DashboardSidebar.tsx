
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Calendar,
  MessageSquare,
  User,
  Star,
  Heart,
  Settings,
  LogOut,
  FileText,
  LayoutDashboard,
  Users,
  PieChart,
} from 'lucide-react';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-3 mb-1 rounded-lg transition-all duration-200 group ${
        isActive
          ? 'bg-brand-500 text-white'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 ${
        isActive
          ? 'bg-white/20'
          : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30'
      }`}>
        {icon}
      </div>
      <span className="font-medium">{label}</span>
      {isActive && (
        <div className="w-2 h-2 rounded-full bg-white ml-auto"></div>
      )}
    </Link>
  );
};

interface DashboardSidebarProps {
  userType: 'user' | 'provider';
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ userType }) => {
  const location = useLocation();
  const pathname = location.pathname;
  
  const userLinks = [
    { to: '/dashboard/user', icon: <Home size={20} />, label: 'Overview' },
    { to: '/dashboard/user/bookings', icon: <Calendar size={20} />, label: 'My Bookings' },
    { to: '/dashboard/user/messages', icon: <MessageSquare size={20} />, label: 'Messages' },
    { to: '/dashboard/user/reviews', icon: <Star size={20} />, label: 'My Reviews' },
    { to: '/dashboard/user/saved', icon: <Heart size={20} />, label: 'Saved Providers' },
    { to: '/dashboard/user/profile', icon: <User size={20} />, label: 'My Profile' },
  ];
  
  const providerLinks = [
    { to: '/dashboard/provider', icon: <LayoutDashboard size={20} />, label: 'Overview' },
    { to: '/dashboard/provider/requests', icon: <FileText size={20} />, label: 'Service Requests' },
    { to: '/dashboard/provider/bookings', icon: <Calendar size={20} />, label: 'Bookings' },
    { to: '/dashboard/provider/clients', icon: <Users size={20} />, label: 'Clients' },
    { to: '/dashboard/provider/analytics', icon: <PieChart size={20} />, label: 'Analytics' },
    { to: '/dashboard/provider/profile', icon: <User size={20} />, label: 'Profile' },
  ];
  
  const links = userType === 'user' ? userLinks : providerLinks;
  
  return (
    <aside className="bg-white dark:bg-gray-800 w-72 border-r border-gray-200 dark:border-gray-700 min-h-screen p-5">
      <div className="flex items-center mb-8 pl-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-500 text-white mr-2">
          <span className="font-sora text-xl font-bold">L</span>
        </div>
        <span className="font-sora text-xl font-bold">
          <span className="text-brand-600">Local</span>
          <span className="text-gray-700 dark:text-gray-300">Services</span>
        </span>
      </div>
      
      <div className="neu-card mb-6">
        <div className="flex items-center">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="w-12 h-12 rounded-full object-cover mr-3" 
          />
          <div>
            <h4 className="font-medium">
              {userType === 'user' ? 'Emily Davis' : 'Jennifer Lee'}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {userType === 'user' ? 'Client' : 'Electrician'}
            </p>
          </div>
        </div>
      </div>
      
      <nav className="space-y-1 mb-8">
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold pl-3 mb-2">Main Menu</p>
        {links.map((link) => (
          <SidebarLink
            key={link.to}
            to={link.to}
            icon={link.icon}
            label={link.label}
            isActive={pathname === link.to}
          />
        ))}
      </nav>
      
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-auto">
        <SidebarLink
          to="/dashboard/settings"
          icon={<Settings size={20} />}
          label="Settings"
          isActive={pathname === '/dashboard/settings'}
        />
        <Link
          to="/"
          className="flex items-center px-3 py-3 mb-1 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all duration-200"
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-red-50 dark:bg-red-900/20">
            <LogOut size={20} />
          </div>
          <span className="font-medium">Sign Out</span>
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
