import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map'), { ssr: false })
import { MapProps } from 'components/Map'

export default function MapTemplate({ geometries }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Maps"
        description="A simple project to create custom maps with NextJs and Leaflet."
        canonical="https://my-maps.ricardoavancini.com.br"
        openGraph={{
          url: 'https://my-maps.ricardoavancini.com.br',
          title: 'My Maps',
          description:
            'A simple project to create custom maps with NextJs and Leaflet.',
          images: [
            {
              url: 'https://my-maps.ricardoavancini.com.br/img/cover.png',
              width: 1280,
              height: 698,
              alt: 'My Maps'
            }
          ],
          site_name: 'My Maps'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map geometries={geometries} />
    </>
  )
}
