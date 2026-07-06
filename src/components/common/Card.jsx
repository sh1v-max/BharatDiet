export default function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white p-6 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
