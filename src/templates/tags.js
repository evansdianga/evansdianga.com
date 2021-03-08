import { graphql } from 'gatsby';
import React from 'react';

import Layout from './layout';

import Container from '../components/Container';
import Card from '../components/Card';
import { Helmet } from 'react-helmet';
import ContinueReading from '../components/Summary/ContinueReading';
const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  return (
    <Layout>
      <Container>
        <Helmet title={tag} />
        <Card>
          <h1>{tagHeader}</h1>
          <ul>
            {edges.map(({ node },i) => {
              const { slug } = node.fields;
              const { title } = node.frontmatter;
              return (
                <h1 key={slug}>
                  <ContinueReading
                    style={{ marginTop: '0px', fontSize: '20px' }}
                    to={slug}
                  >
                    {i+1 +'.'} {title}
                  </ContinueReading>
                </h1>
              );
            })}
          </ul>
        </Card>
      </Container>
    </Layout>
  );
};

export default Tags;
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
