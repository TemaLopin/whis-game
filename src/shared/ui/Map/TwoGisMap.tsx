// @ts-nocheck

import React, { useEffect, useRef, useState } from 'react'
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
  zoom: defaultZoom,
  className,
  projectDetector = false,
  geoclicker = false,
  zoomControl = false,
  fullscreenControl = true,
}) => {
  const [firstRender, setFirstRender] = useState(true)
  const zoom = useRef(defaultZoom)

  const containerRef = useRef<HTMLDivElement>(null)

  const getPlaceInfo = async ({ lat, lon }: { lat: number; lon: number }) => {
    try {
      const res = await axios.get('https://catalog.api.2gis.com/3.0/items', {
        params: {
          lat,
          lon,
          key: process.env.REACT_APP_GIS_KEY,
          fields: 'items.contact_groups',
        },
      })
      console.log('🚀  !@#$ ~ getPlaceInfo ~ res:', res)
    } catch (error) {
      console.error('Error fetching place info:')
    }
  }

  useEffect(() => {
    const options: DG.MapOptions = {
      zoom: zoom.current,
      center,
      projectDetector,
      geoclicker,
      zoomControl,
      fullscreenControl,
    }

    const map = DG.map('map-container', options)

    const myLocationIcon = DG.icon({
      iconUrl: RedMapIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    })

    DG.marker(center, { icon: myLocationIcon }).addTo(map)

    const getPlacesLocation = async ({ lat: send_lat, lng: send_lng }: { lat: number; lng: number }) => {
      try {
        const { data } = await axios.get<PlacesResponse>(`https://catalog.api.2gis.com/3.0/markers`, {
          params: {
            key: process.env.REACT_APP_GIS_KEY,
            q: 'приюты для животных',
            locale: 'ru_RU',
            search_type: 'indoor',
            search_input_method: 'software_generated',
            radius: 40000,
            pageSize: 15000,
            locale: 'ru_RU',
            zoom: zoom,
            location: `${send_lng},${send_lat}`,
            type: 'adm_div.city,adm_div.district,adm_div.district_area,adm_div.division,adm_div.living_area,adm_div.place,adm_div.region,adm_div.settlement,attraction,branch,building,crossroad,foreign_city,gate,parking,road,route,station,street,coordinates,kilometer_road_sign',
            fields:
              'items.ads,items.name,items.stop_factors,items.reviews,items.schedule,items.context,items.name_ex,items.timezone_offset,items.flags,items.has_exchange,items.temporary_unavailable_atm_services,search_attributes',
            r: 255134575,
          },
        })

        const { result } = data

        result.items.forEach(({ lat, lon, name }) => {
          DG.marker([lat, lon]).bindPopup(name).addTo(map)
          // .on('click', () => getPlaceInfo({ lat, lon }))
        })
      } catch (error) {
        console.error('Error fetching places:', error)
      }
    }

    DG.then(
      (f, s) => {
        map.on('dragend', (e) => {
          const { lat, lng } = map.getCenter()
          getPlacesLocation({ lat, lng })
        })
        map.on('zoomend', (e) => {
          zoom.current = map.getZoom()
          const { lat, lng } = map.getCenter()
          getPlacesLocation({ lat, lng })
        })
      },
      () => {}
    )

    if (!firstRender) return () => map.remove()

    getPlacesLocation({ lat: center[0], lng: center[1] })
    setFirstRender(false)

    return () => map.remove()
  })

  return <div id='map-container' ref={containerRef} style={style} className={className}></div>
}

export default TwoGisMap
