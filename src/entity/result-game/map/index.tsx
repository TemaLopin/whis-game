import TwoGisMap from '../../../shared/ui/Map/TwoGisMap'

import s from './style.module.scss'

const ShelterMap = () => {
  return (
    <div className={s.body}>
      <div className={s.border}>
        <TwoGisMap className={s.map} center={[47.240969, 38.892763]} zoom={15} />
      </div>
    </div>
  )
}

export default ShelterMap
