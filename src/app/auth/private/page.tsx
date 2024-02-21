import { BackgroundImage } from './components'
import { AuxBtns } from './components/AuxBtns'
import { Requests } from './components/Requests'

const admin = () => {
  return (
    <div>
      <BackgroundImage />
      <div className="relative z-10">
        <h3 className="text-btn-light dark:text-white text-center text-2xl font-extrabold py-5">
          Solicitudes
        </h3>
        <Requests />
      </div>
      <AuxBtns />
    </div>
  )
}

export default admin
