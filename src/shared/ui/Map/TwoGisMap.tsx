// @ts-nocheck

import React, { useState, useEffect, useRef } from 'react'
import DG from '2gis-maps'

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

    DG.marker(center).addTo(map)

    return () => map.remove()
  }, [containerRef, center, zoom, geoclicker, zoomControl, projectDetector, fullscreenControl])

  // const openFullscreen = () => {
  //   const mapContainer = document.getElementById('map-container')
  //   if (mapContainer) {
  //     if (mapContainer.requestFullscreen) {
  //       mapContainer.requestFullscreen()
  //     } else if (mapContainer.webkitRequestFullscreen) {
  //       mapContainer.webkitRequestFullscreen()
  //     } else if (mapContainer.msRequestFullscreen) {
  //       mapContainer.msRequestFullscreen()
  //     }
  //   }
  // }

  return <div id='map-container' ref={containerRef} style={style} className={className}></div>
}

export default TwoGisMap
