import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import { MdClose } from "react-icons/md";

export const MainContainer = styled.div`
  position: fixed;
  height: 110vh;
  width: 110vw;

  padding: 20px 24px;
  opacity: 1;
  transform: translate(-20%, -62%);
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  position: relative;
  margin-right: 200px;
  padding: 20px 24px;
  background: white;
  height: auto;
  width: 800px;
  box-shadow: 0px 5px 16px rgba(0, 0.2);
  color: #000;
`;

export const FormWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormField = styled.input`
  padding: 0px 10px;
  height: 50px;
  width: 80%;
  font-size: 1.2rem;
`;
export const SelectForm = styled.select`
  padding: 0px 10px;
  text-align: center;
  height: 50px;
  width: 80%;
  text-align: center;
  font-size: 1.2rem;
`;

export const FormName = styled.h4`
  margin-right: 20px;
  text-align: right;
  line-height: 50px;
  height: 50px;
`;

export const Span = styled.span`
  background: #2fa4d6;
  height: 200px;
  width: 200px;
`;

export const SingleFormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const CloseModalButton = styled(MdClose)`
  position: absolute;
  width: 100%;
  font-size: 30px;
  cursor: pointer;

  height: 40px;
  width: 40px;

  right: 10px;
  top: 10px;

  margin-bottom: 10px;
`;

export const ImageBox = styled.img`
  height: 200px;
  width: 200px;
  border: 1px solid orange;
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

export const SingleFormWrapperImage = styled.div``;
