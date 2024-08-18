import { nanoid } from 'nanoid'
import slugify from 'slugify'

export function capitalize(str: string) {
  if (str.length === 0) return str

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const formatDate = (date: Date) => {
  return new Date(date).toLocaleString('us-EN', { day: 'numeric', month: 'short', year: "numeric" })
}

export function getFirstAndLastInitials(fullName: string): string {
  if (typeof fullName !== 'string' || fullName.trim() === '') {
    throw new Error('Invalid input: fullName must be a non-empty string.')
  }

  const words = fullName.trim().split(/\s+/)

  if (words.length < 2) {
    throw new Error('Invalid input: fullName must contain at least two words.')
  }

  const firstInitial = words[0][0].toUpperCase()
  const lastInitial = words[words.length - 1][0].toUpperCase()

  return firstInitial + lastInitial
}


export function generateUniqueSlug(title: string) {
  const baseSlug = slugify(title, { lower: true, strict: true, })
  const uniqueId = nanoid(6)
  return `${baseSlug}-${uniqueId}`
}