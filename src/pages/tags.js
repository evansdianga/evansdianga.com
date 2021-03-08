import React from 'react';

// Utilities
import kebabCase from 'lodash/kebabCase';

// Components
import { Helmet } from 'react-helmet';
import {graphql } from 'gatsby';
import Layout from '../templates/layout';
import Container from '../components/Container'
import Card from '../components/Card';
import ContinueReading from '../components/Summary/ContinueReading';
const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Container>
    <Helmet title={title} />
    <Card>
      <h1>Tags</h1>
      <ul>
        {group.sort().map(tag => (
          <h1 key={tag.fieldValue}>
            <ContinueReading style={{marginTop:'0px', fontSize:'20px'}} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </ContinueReading>
          </h1>
        ))}
      </ul>
    
    </Card>
    
    </Container>
  </Layout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
