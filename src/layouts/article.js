import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";

// export const query = graphql`
//   query ArticleQuery($slug: String!) {
//     strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
//       strapiId
//       title
//       description
//       content
//       publishedAt
//       image {
//         publicURL
//         childImageSharp {
//           fixed {
//             src
//           }
//         }
//       }
//       author {
//         name
//         picture {
//           childImageSharp {
//             fixed(width: 30, height: 30) {
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const Article = ({ data }) => {
  // const article = data.strapiArticle;
  // const seo = {
  //   metaTitle: article.title,
  //   metaDescription: article.description,
  //   shareImage: article.image,
  //   article: true,
  // };

  return (
    <Layout seo={seo}>
      <div>
        
      </div>
    </Layout>
  );
};

export default Article;