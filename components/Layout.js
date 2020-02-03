import Header from './Header';
import styled from 'styled-components';

const StyledLayout = styled.div`
  margin: 20px;
  padding: 20px;
  border: '1px solid #ddd';
`;

const Layout = props => (
  <StyledLayout>
    <Header />
    { props.children }
  </StyledLayout>
);

export default Layout;
