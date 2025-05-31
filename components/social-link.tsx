"use client"

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-custom-darkBlue hover:text-white"
    >
      <span className="sr-only">{label}</span>
      {icon}
    </a>
  )
}
