import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display:flex;
  justify-content: space-between;
  .nav-right {
    padding-top: 22px;
    a {
      padding-left: 35px;
    }
  }
`;

const Header = () => (
  <StyledNav>
    <div className="nav-left">
      <h3>Rewardly</h3>
    </div>
    <div className="nav-right">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
    </div>
  </StyledNav>
);

export default Header;
