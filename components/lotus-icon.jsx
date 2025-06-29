export default function LotusIcon({ className = "w-12 h-12", variant = "outline" }) {
  if (variant === "filled") {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15 C35 20, 30 30, 50 35 C70 30, 65 20, 50 15 Z" />
        <path d="M50 20 C25 25, 20 40, 50 45 C80 40, 75 25, 50 20 Z" />
        <path d="M50 25 C15 30, 10 50, 50 55 C90 50, 85 30, 50 25 Z" />
        <path d="M50 30 C10 35, 5 60, 50 65 C95 60, 90 35, 50 30 Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M50 20 C35 25, 35 35, 50 40 C65 35, 65 25, 50 20 Z" />
        <path d="M50 25 C30 30, 25 45, 50 50 C75 45, 70 30, 50 25 Z" />
        <path d="M50 30 C25 35, 20 55, 50 60 C80 55, 75 35, 50 30 Z" />
        <path d="M50 35 C20 40, 15 65, 50 70 C85 65, 80 40, 50 35 Z" />
      </g>
    </svg>
  )
}
