interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  label?: string
  children?: React.ReactNode
  customStyles?: string
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  children,
  customStyles,
  ...props
}) => {
  return (
    <button
      className={` ${customStyles} text-sm font-bold text-white flex items-center justify-center bg-btn-light dark:bg-container-light dark:hover:bg-btn-dark  py-2 px-4 rounded transition duration-300 ease-in-out `}
      onClick={onClick}
      {...props}
    >
      {children ?? label}
    </button>
  )
}
