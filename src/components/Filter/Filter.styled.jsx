import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${p => p.theme.space[2]}px;
`;

export const InputFilter = styled.input`
  width: ${p => p.theme.sizes.input};
  box-sizing: border-box;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.accentColor};
  border-radius: ${p => p.theme.radii.normal};
  font-family: ${p => p.theme.fonts.body};

  &:focus,
  &:hover,
  &:active {
    outline: 0;
    border: ${p => p.theme.borders.active};
    border-color: ${p => p.theme.colors.secondary};
  }
`;
