import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      I started my journey in learning web development on May 26th, 2019 and
      have loved every single minute of it. I've had a lot of issues along the
      way and would like to share my solutions to those problems so you don't
      have to spend as much time as I did figuring it out!
    </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
