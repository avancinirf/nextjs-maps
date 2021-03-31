import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import { FeatureCollection } from 'geojson'

export type MapProps = {
  geoDataArray?: FeatureCollection[]
}

const Map = ({ geoDataArray }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[0, 0]} title="Point 01">
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>

    {geoDataArray?.map((geo) => {
      return (
        <GeoJSON
          key={`Layer-${Math.floor(Math.random() * 101)}`}
          attribution="credits due..."
          data={geo}
        />
      )
    })}
  </MapContainer>
)

export default Map
