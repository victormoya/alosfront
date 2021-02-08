import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ seo = {} }) => {};
  
export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

// const query = graphql`
//   query {
//     strapiGlobal {
//       siteName
//       favicon {
//         publicURL
//       }
//       defaultSeo {
//         metaTitle
//         metaDescription
//         shareImage {
//           publicURL
//         }
//       }
//     }
//   }
// `;
