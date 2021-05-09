import styled from 'styled-components/native';

type RowProps = {
  separate?: boolean;
};

const Row = styled.View<RowProps>`
  flex-direction: row;
  justify-content: ${(props) =>
    props.separate ? 'space-between' : 'flex-start'};
  align-items: center;
`;

export default Row;
