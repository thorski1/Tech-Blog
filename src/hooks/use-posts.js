import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
    const data = useStaticQuery(graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
              author
              image {
                sharp: childImageSharp {
                  fluid(
                    maxWidth: 100
                    maxHeight: 100
                    duotone: { shadow: "#0d44a8", highlight: "#dce7fa" }
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    `);

    return data.allMdx.nodes.map(post => ({
      title: post.frontmatter.title,
      author: post.frontmatter.author,
      slug: post.frontmatter.slug,
      image: post.frontmatter.image,
      excerpt: post.excerpt,
    }));
}

export default usePosts;