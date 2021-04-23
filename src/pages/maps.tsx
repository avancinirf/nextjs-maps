import MapTemplate from 'templates/Map'
import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GET_GEOMETRIES } from 'graphql/queries'
import { GetGeometriesQuery } from 'graphql/generated/graphql'

export default function Map({ geometries }: MapProps) {
  return <MapTemplate geometries={geometries} />
}

export const getStaticProps = async () => {
  const { geometries } = await client.request<GetGeometriesQuery>(
    GET_GEOMETRIES
  )
  return {
    props: {
      geometries
    }
  }
}

/* import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Maps() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map />
    </>
  )
} */
