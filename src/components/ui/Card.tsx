import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <div 
      className={cn(
        'card',
        hover && 'hover:shadow-lg transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card