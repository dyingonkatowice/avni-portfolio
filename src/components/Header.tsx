"use client"

import { ModeToggle } from "./mode-toggle"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Battery, BatteryLow, BatteryMedium, BatteryFull } from 'lucide-react'
import { Button } from "./ui/button"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full backdrop-blur-[10px] bg-content-bg-light dark:bg-content-bg-dark z-50 border-b border-text-tertiary-light/10 dark:border-text-tertiary-dark/10">
      <div className="container max-w-3xl mx-auto">
        <nav className="flex items-center justify-between h-16 px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <div className="w-[120px]">
            <Link href="/" scroll={true}>
              <div className="flex items-center group font-bold text-[16px]">
                <div className="relative flex items-center gap-4">
                  <div className="relative">
                    <Battery className="w-6 h-6 transition-opacity duration-300 opacity-100 text-red-500 group-hover:opacity-0" />
                    <BatteryLow className="w-6 h-6 absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:animate-[charge_1s_ease-in-out_infinite] text-red-500" />
                    <BatteryMedium className="w-6 h-6 absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:animate-[charge_1s_ease-in-out_infinite_0.3s] text-yellow-500" />
                    <BatteryFull className="w-6 h-6 absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:animate-[charge_1s_ease-in-out_infinite_0.6s] text-lime-500" />
                  </div>
                  <span className="whitespace-nowrap transition-transform duration-300 hover:scale-110 text-text-primary-light dark:text-text-primary-dark">
                    Avni Guzen
                  </span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <nav className="flex space-x-6">
              <Link
                href="/Projects"
                scroll={true}
                className="text-sm font-medium transition-colors hover:text-primary hover:underline"
              >
                Projects
              </Link>
              <Link
                href="/Resume"
                scroll={true} 
                className="text-sm font-medium transition-colors hover:text-primary hover:underline"
              >
                Resume
              </Link>
              <Link
                href="/Posts"
                scroll={true}
                className="text-sm font-medium transition-colors hover:text-primary hover:underline"
              >
                Blog
              </Link>
            </nav>
          </div>


          {/* Theme Toggle and Mobile Menu */}
          <div className="w-[120px] flex items-center justify-end gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t px-4 py-4">
            <nav className="grid gap-4">
              <Link
                href="/Projects"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Projeler
              </Link>
              <Link
                href="/Resume"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
              <Link
                href="/Posts"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
