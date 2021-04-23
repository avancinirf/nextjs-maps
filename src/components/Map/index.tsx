import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import { Feature, GeoJsonObject } from 'geojson'
import { Layer } from 'leaflet'

type Geometry = {
  id: string
  name: string
  slug: string
  geotype: string
  geojson: GeoJsonObject
}

export type MapProps = {
  geometries?: Geometry[]
}

const onEachFeature = (feature: Feature, layer: Layer) => {
  const title = feature.properties?.title || 'Untitled Feature'
  // TODO - Passar todas as propriedades e gerar dinamicamente o popup
  layer.on('mouseover', function () {
    layer.bindPopup(title)
  })
}

const Map = ({ geometries }: MapProps) => (
  <MapContainer
    center={[-22.595447151697968, -43.200456906554251]}
    zoom={16}
    style={{ height: '100%', width: '100%' }}
  >
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
)

export default Map
