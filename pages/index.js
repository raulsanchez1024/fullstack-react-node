import styled from 'styled-components';
import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/Layout';
import PrimaryButton from '../components/styles/PrimaryButton';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Index() {
  return (
    <Layout>
      <Hero>
        <h2>A simple rewards system for local businesses.</h2>
        {/* <PrimaryButton>HIHIHI</PrimaryButton> */}
        <Link href="/d">
          <PrimaryButton>HIHIHI</PrimaryButton>
        </Link>
      </Hero>
    </Layout>
  );
}

export default Index;
