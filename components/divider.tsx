import { cn } from '@/lib/utils'

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn('divider-gradient', className)}
      role="presentation"
      aria-hidden="true"
    />
  )
}
