interface ErrorFieldProps {
  message: string
}
export const ErrorField = ({ message }: ErrorFieldProps) => {
  return <h4 className="text-white ml-2 text-sm max-w-48 mt-1 ">{message}</h4>
}
