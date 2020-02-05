import App, { Container } from 'next/app';
import Meta from '../components/Meta';

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Meta />
        <p>Hey, i'm everywhere.</p>
        <Component />
      </Container>
    );
  }
}

export default MyApp;
