interface Props {
  value: string
  fieldName: string
  ref: any
  type?: 'text' | 'password' | 'email'
}
export const InputField = ({ value, fieldName, ...props }: Props) => {
  return (
    <>
      <h4 className="my-2 text-sm text-background-light dark:text-btn-dark ">
        {fieldName}
      </h4>
      <input
        {...props}
        placeholder={fieldName}
        className="bg-white p-2 rounded w-full text-btn-dark dark:text-btn-light"
        value={value || ''}
      />
    </>
  )
}
