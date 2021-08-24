import styled from "styled-components";

import { Container } from "../../../globalStyles";
import MapSearch from "../MapSearch";

export const MapHeroContainer = styled.div`
  height: 90vh;
  background: #a8ff78; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #78ffd6,
    #a8ff78
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #78ffd6,
    #a8ff78
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const MapHeroWrapper = styled(Container)`
  line-height: 70vh;
  display: flex;
  align-items: center;
`;

export const MapItems = styled.div``;

export const MapSearchItem = styled(MapSearch)`



`;
