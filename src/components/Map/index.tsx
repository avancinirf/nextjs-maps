import { MapContainer, TileLayer, GeoJSON, MapConsumer } from 'react-leaflet'
import { Feature, GeoJsonObject } from 'geojson'
import { Layer } from 'leaflet'

import * as S from './styles'

type LayerStyle = {
  color?: string
  weight?: number
}

type Geometry = {
  id: string
  name: string
  slug: string
  geotype: string
  geojson: GeoJsonObject
  style: LayerStyle
}

export type MapProps = {
  geometries?: Geometry[]
}

const onEachFeature = (feature: Feature, layer: Layer) => {
  const title = feature.properties?.title || 'Untitled Feature'
  layer.bindPopup(title)
}

const Map = ({ geometries }: MapProps) => (
  <S.MapWrapper>
    <MapContainer
      center={[-22.595447151697968, -43.200456906554251]}
      zoom={16}
      minZoom={10}
      style={{ height: '100%', width: '100%' }}
    >
      <MapConsumer>
        {(map) => {
          const width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth
          if (width < 768) {
            map.setMinZoom(8)
          }
          return null
        }}
      </MapConsumer>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[0, 0]} title="Point 01">
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}

      {geometries?.map((geo: Geometry) => {
        return (
          <GeoJSON
            key={geo.slug}
            attribution="credits due..."
            data={geo.geojson}
            onEachFeature={onEachFeature}
            pathOptions={{ color: '#F7B529' }}
            /* eventHandlers={{
              click: (e) => {
                console.log(e.layer.feature.properties.title)
                console.log(e)
              }
            }} */
          ></GeoJSON>
        )
      })}
    </MapContainer>
  </S.MapWrapper>
)

export default Map
