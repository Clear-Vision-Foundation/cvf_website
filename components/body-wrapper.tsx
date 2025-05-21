'use client'

interface BodyWrapperProps {
  className?: string
  children: React.ReactNode
}

export function BodyWrapper({ className, children }: BodyWrapperProps) {
  return (
    <body className={className} suppressHydrationWarning>
      {children}
    </body>
  )
}
