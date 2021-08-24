import styled from "styled-components";
import { Container } from "../../globalStyles";

export const DetailViewContainer = styled(Container)`
  margin-top: 20px;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const DetailViewImageContainer = styled.div``;
export const ImageContainer = styled.div``;

export const Image = styled.img`
  box-shadow: 2px 3px 24px 0px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  height: 450px;
  width: 1000px;
  margin: auto;
  position: inline-block;

  @media screen and (max-width: 991px) {
    width: 100%;
    height: auto;
  }
`;

export const ImageWrapper = styled.div`
  padding: 10px 0px;
  z-index: 100;
  width: 1000px;
`;

export const StoreHeader = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  list-style: none;
  font-size: 2.5rem;
`;

export const ToplineWrapper = styled.div`
  padding: 10px 0px;
  display: flex;
`;

export const StoreCard = styled.li`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #444;
  height: 25px;
  align-items: center;
  text-align: center;
  display: flex;
  list-style: none;
  padding: 5px;
  font-size: 0.95rem;
`;

export const FaItems = styled.div`
  padding: 5px;
  color: red;
`;

export const PriceDetails = styled.div`
  display: felx;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid gray;
  width: 300px;
  height: 80px;

  @media screen and (max-width: 991px) {
    padding: 0px;
  }
`;

export const PriceDetailInnerWrapper = styled.div`
  padding: 20px;
`;
export const PriceDetail1 = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
`;
export const PriceDetail2 = styled.div`
  font-family: Arial, Helvetica, sans-serif;

  color: #444;
`;

export const ListNavContainer = styled.div`
  margin-top: 20px;
  padding: 20px 24px;
  font-family: sans-serif;
  display: flex;
  height: 40px;
  align-items: center;
  gap: 30px;
  width: 1000px;
  margin-bottom: 10px;
`;
export const ListItems = styled.li`
  text-decoration: none;
  list-style: none;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CustomStyles = styled.div`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  height: 600px;
  background: red;
`;

export const AddButton = styled.button`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  font-size: 1.2rem;
  height: 50px;
  width: 150px;
  border: 2px solid #2fa4d6;
  background: white;
  color: #2fa4d6;
  justify-content: center;

  &:hover {
    background: #2fa4d6;
    color: white;
  }
`;
