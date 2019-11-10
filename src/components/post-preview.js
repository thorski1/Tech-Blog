import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image'
import ReadLink from './read-link';

const PostPreview = ({ post }) => (
  <article
    css={css`
      display: flex;
      margin-top: 0;
      margin-bottom: 10px;
      padding: 1rem;
      width: 550px;
      box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
        0 5px 15px 0 rgba(0, 0, 0, 0.08);
      background-color: #ffffff;
      border-radius: 0.5rem;
      border-left: 0 solid #234d96;
      transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;

      :hover {
        padding-left: 0.5rem;
        border-left: 0.5rem solid #234d96;
      }

      :first-of-type {
        margin-top: 1rem;
      }

      a {
        text-decoration: none;
        font-size: 1.4rem;
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
        `}
        alt={post.title}
      />
    </Link>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </article>
);

export default PostPreview