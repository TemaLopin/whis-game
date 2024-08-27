import { useEffect, useState } from 'react'
import TwoGisMap from '../../../shared/ui/Map/TwoGisMap'

import s from './style.module.scss'

type UserLocation = {
  coords: {
    latitude: number
    longitude: number
  }
}

const ShelterMap = () => {
  const [currentLocation, setCurrentLocation] = useState<[number, number]>([0, 0])

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      const successLocation = ({ coords }: UserLocation) => {
        const { latitude, longitude } = coords
        setCurrentLocation([latitude, longitude])
      }

      const rejectLocation = () => {
        console.log('Error getting location')
      }

      navigator.geolocation.getCurrentPosition(successLocation, rejectLocation)
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <div className={s.body}>
      <div className={s.border}>
        <TwoGisMap className={s.map} center={currentLocation} zoom={15} />
      </div>
    </div>
  )
}

export default ShelterMap
