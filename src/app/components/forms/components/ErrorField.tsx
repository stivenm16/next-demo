interface ErrorFieldProps {
  message: string
}
const ErrorField = ({ message }: ErrorFieldProps) => {
  return <h4 className="text-white ml-2 text-sm max-w-48 mt-1 ">{message}</h4>
}

export default ErrorField
