import styled from "styled-components";
import { Container } from "../../globalStyles";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

export const GoogleMapContainer = styled(Container)`
  @media screen and (max-width: 600px) {
    height: 500px;
  }
`;
