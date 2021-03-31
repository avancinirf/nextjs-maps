import { render, screen } from '@testing-library/react'
import points from './test_data/points.json'
import lines from './test_data/linestrings.json'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    // generate a url to show all dava and component preview to get the map link
    // screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it.skip('should render with marker in correct place', () => {
    render(<Map geoDataArray={[points, lines]} />)
    expect(screen.getByTitle(/Point 01/i)).toBeInTheDocument()
    /*
     * Leaflet Polyline uses SVG renderer (by default) but JSDOM which comes
     * with Jest test runner for Create React App, does not support SVG to a
     * full extent (in particular createSVGRect is not supported).
     * That's basically the reason why the specified error occurs.
     */
  })
})
