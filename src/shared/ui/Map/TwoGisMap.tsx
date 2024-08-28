// @ts-nocheck

import React, { useEffect, useRef } from 'react'
import DG from '2gis-maps'
import axios from 'axios'
import RedMapIcon from '../../assets/images/red-map-icon.png'

type MapProps = {
  style?: React.CSSProperties
  center: [number, number]
  zoom: number
  className?: string
  projectDetector?: boolean
  geoclicker?: boolean
  zoomControl?: boolean
  fullscreenControl?: boolean
}

type Place = {
  id: string
  type: string
  lat: number
  lon: number
  is_advertising: boolean
}

type PlacesResponse = {
  result: { items: Place[]; total: number }
  mete: { api_version: string; code: string; issue_date: string }
}

const TwoGisMap: React.FC<MapProps> = ({
  style,
  center,
  zoom,
  className,
  projectDetector = false,
  geoclicker = false,
  zoomControl = false,
  fullscreenControl = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options: DG.MapOptions = { zoom, center, projectDetector, geoclicker, zoomControl, fullscreenControl }

    const map = DG.map('map-container', options)

    const myLocationIcon = DG.icon({
      iconUrl: RedMapIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    })

    DG.marker(center, { icon: myLocationIcon }).addTo(map)

    const getPlaces = async () => {
      try {
        const { data } = await axios.get<PlacesResponse>(
          `https://catalog.api.2gis.com/3.0/markers?q=кафе&sort_point=${center.join(',')}&key=${
            process.env.REACT_APP_GIS_KEY
          }`
        )

        const { result } = data

        result.items.map(({ lat, lon, type }) => DG.marker([lat, lon]).addTo(map).bindPopup(type))
      } catch (error) {
        console.error('Error fetching places:', error)
      }
    }

    // getPlaces()
    return () => map.remove()
  }, [containerRef, center, zoom, geoclicker, zoomControl, projectDetector, fullscreenControl])

  return <div id='map-container' ref={containerRef} style={style} className={className}></div>
}

export default TwoGisMap
