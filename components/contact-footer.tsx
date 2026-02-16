"use client"

import { Mail, Instagram, Twitter, Facebook, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactFooter() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/milligbp", label: "Instagram" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    // { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Mail, href: "mailto:Flexybeeofficial@gmail.com", label: "Email" },
  ]

  return (
    <footer id="contact" className="w-full bg-foreground text-primary-foreground">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-balance">Get in Touch</h3>
            <div className="space-y-4">
              <a href="mailto:hello@artist.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>officialmilligbp@gmail.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>+234 8133 5166 61</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-2">
              <Link href="#biography" className="block hover:text-accent transition-colors">
                Biography
              </Link>
              <Link href="#songs" className="block hover:text-accent transition-colors">
                Music
              </Link>
              <Link href="#discography" className="block hover:text-accent transition-colors">
                Discography
              </Link>
              <Link href="#features" className="block hover:text-accent transition-colors">
                Press
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
            <p className="mb-4 text-primary-foreground/90">Subscribe for the latest news and updates</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-accent text-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <p className="mb-6 font-semibold">Follow on Social Media</p>
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; {currentYear} Milligbp. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
