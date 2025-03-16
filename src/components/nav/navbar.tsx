import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../../components/ui/button";

/**
 * NavbarProps interface defines the props for the Navbar component
 */
export interface NavbarProps {
  /**
   * Optional logo URL to display in the navbar
   */
  logoUrl?: string;
  
  /**
   * Optional logo alt text for accessibility
   */
  logoAlt?: string;
  
  /**
   * Whether to show the full navigation or a minimal version
   */
  minimal?: boolean;
  
  /**
   * Optional custom navigation items to override defaults
   */
  navigationItems?: Array<{
    label: string;
    href: string;
    icon?: React.ReactNode;
  }>;
  
  /**
   * Optional custom class name for styling
   */
  className?: string;
  
  /**
   * Optional custom right-aligned content
   */
  rightContent?: React.ReactNode;
  
  /**
   * Optional callback for when the user clicks the login button
   */
  onLoginClick?: () => void;
  
  /**
   * Whether the user is currently authenticated
   */
  isAuthenticated?: boolean;
  
  /**
   * User's display name if authenticated
   */
  userName?: string;
}

/**
 * Navigation item interface
 */
interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

/**
 * Default navigation items for the application
 */
const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Countdowns", href: "/countdowns" },
  { label: "Gallery", href: "/gallery" },
  { label: "Create", href: "/creator-studio" }
];

/**
 * Navbar component for the SimpleCountdown.org application
 * Provides navigation and user authentication controls
 */
export const Navbar: React.FC<NavbarProps> = ({
  logoUrl = "/assets/images/icons/favicon.ico",
  logoAlt = "SimpleCountdown.org",
  minimal = false,
  navigationItems = DEFAULT_NAV_ITEMS,
  className = "",
  rightContent,
  onLoginClick,
  isAuthenticated = false,
  userName,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };
  
  return (
    <nav className={`bg-white dark:bg-slate-900 shadow-sm px-4 sm:px-6 lg:px-8 py-3 ${className}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and site name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {logoUrl && (
              <Image
                src={logoUrl}
                alt={logoAlt}
                width={32}
                height={32}
                className="mr-2"
              />
            )}
            <span className="text-xl font-semibold dark:text-white">
              SimpleCountdown
            </span>
          </Link>
        </div>
        
        {/* Desktop navigation */}
        {!minimal && (
          <div className="hidden md:flex md:items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-2 py-1 text-sm font-medium transition duration-150 ease-in-out 
                  ${pathname === item.href 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-300"}
                `}
              >
                {item.icon && <span className="mr-1">{item.icon}</span>}
                {item.label}
              </Link>
            ))}
          </div>
        )}
        
        {/* Right side content - auth or custom */}
        <div className="flex items-center">
          {rightContent ? (
            rightContent
          ) : (
            <>
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <div className="mr-2">
                    <Link href="/dashboard">
                      <Button
                        variant="ghost"
                        size="sm"
                      >
                        Dashboard
                      </Button>
                    </Link>
                  </div>
                  <Link href="/profile">
                    <Button
                      variant="primary"
                      size="sm"
                    >
                      {userName || "My Profile"}
                    </Button>
                  </Link>
                </div>
              ) : (
                <Button
                  onClick={onLoginClick}
                  variant="primary"
                  size="sm"
                >
                  Sign In
                </Button>
              )}
            </>
          )}
          
          {/* Mobile menu button */}
          {!minimal && (
            <div className="ml-4 md:hidden">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      {!minimal && mobileMenuOpen && (
        <div className="md:hidden mt-2 pt-2 pb-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col space-y-2 px-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-3 py-2 rounded-md text-base font-medium
                  ${pathname === item.href 
                    ? "bg-blue-50 text-blue-700 dark:bg-slate-800 dark:text-blue-400" 
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"}
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;