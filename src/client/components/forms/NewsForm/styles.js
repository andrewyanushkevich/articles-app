import styled from 'styled-components';

import { SPACING_UNIT } from 'client/constants';

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacingUnit}px 0px;
  box-sizing: border-box;
  flex-basis: 100%;
  & > p {
    font-weight: bold;
    font-size: 1.4em;
  }
`;

export const Body = styled.div`
  display: flex;
  margin: ${props => props.theme.spacingUnit}px 0px;
  box-sizing: border-box;
  flex-direction: column;
  flex-basis: 100%;
  & > p {
    font-weight: bold;
    font-size: 1.4em;
  }
`;

export const Select = styled.select`
  margin: ${props => props.theme.spacingUnit / 2}px 0px;
  border: 1px solid black;
`;

export const Input = styled.input.attrs(props => ({
  type: 'text',
}))`
  box-sizing: border-box;
  color: black;
  font-family : inherit;
  font-size   : 100%;
  border: 1px solid black;
`;

export const Radio = styled.input.attrs(props => ({
  type: 'radio',
  name: props.name,
  value: props.value,
}))`
  display: block;
  margin: ${props => props.theme.spacingUnit / 2}px 0px;
`;

export const CheckBox = styled.input.attrs(props => ({
  type: 'checkbox',
  name: props.name,
  value: props.value,
}))`
  display: block;
  margin: ${props => props.theme.spacingUnit / 2}px 0px;
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  height: 250px;
  font-family : inherit;
  font-size   : 100%;
  color: black;
  @media only screen and (max-width: 600px) {
    height: 125px;
  }
  border: 1px solid black;
`;

export const Button = styled.button`
  border: 1px solid black;
`
