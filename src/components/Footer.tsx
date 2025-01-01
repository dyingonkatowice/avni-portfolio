"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-6 md:py-8">
      <div className="container max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center space-x-4">
            <Link 
              href="https://github.com/dyingonkato" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </Link>
            <Link 
              href="https://twitter.com/dyingonkato" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link 
              href="https://linkedin.com/in/avniguzen" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link 
              href="mailto:avniguzen@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Avni Guzen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
