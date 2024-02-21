import { Button } from '.'
import useCustomTheme from '../hooks/useCustomTheme'

export const ToggleTheme = () => {
  const { toggleTheme } = useCustomTheme()
  return (
    <>
      <Button customStyles="ring-1 ring-white" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </>
  )
}
