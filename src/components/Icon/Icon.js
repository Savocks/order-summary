import musicIcon from '../../images/icon-music.svg'

import styled from "styled-components";

const IconWrapper = styled.img`
  object-fit: contain;
  height: 45px;
  width: 45px;
`

function MusicIcon(props) {
  return <IconWrapper src={musicIcon} alt="Music Icon"/>
}

export { MusicIcon };
