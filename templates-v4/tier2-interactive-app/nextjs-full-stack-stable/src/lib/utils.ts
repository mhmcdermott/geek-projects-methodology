import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = 'GBP') {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export function extractDomain(email: string): string | null {
  const match = email.match(/@([^.]+\..+)/)
  return match ? match[1] : null
}

export function validateBusinessEmail(email: string): boolean {
  const domain = extractDomain(email)
  if (!domain) return false
  
  const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']
  return !personalDomains.includes(domain.toLowerCase())
}