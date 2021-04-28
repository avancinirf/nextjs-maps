import * as S from '../styles/home.styles'

export default function Home() {
  return (
    <S.Content>
      <S.Heading>
        Online Map created by
        <b>
          <i> Ricardo Avancini</i>
        </b>
        .
      </S.Heading>
      <S.Body>
        <S.Ul>
          <li>
            <S.Link href="/maps">Map</S.Link>
          </li>
          <li>
            <S.Link href="/about">About</S.Link>
          </li>
          <li>
            <S.Link href="/terms-of-service">Terms of Service</S.Link>
          </li>
        </S.Ul>
      </S.Body>
    </S.Content>
  )
}
