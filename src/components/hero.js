import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'

const ImageBackground = styled(BackgroundImage)`
  background-position: top 30% center;
  background-size: cover;
  height: 50vh;

  + * {
      margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #5d88d9dd, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.75rem;
  }

  p,
  a {
    color: white;
    margin-top: 0;
    font-weight: bold;
  }

  a {
    color: #1d1a21;
    margin-top: 0.5rem;
    text-decoration: none;
    font-size: .9rem;
  }
`;

const Hero = () => {
    const { image } = useStaticQuery(graphql`
      query {
        image: file(relativePath: { eq: "markus-spiske-code.jpg" }) {
            sharp: childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
      }
    `);
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Technologically Challenged 💭</h1>
        <p>
          Solutions to Common Web Development Issues <Link to="/about/">Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
