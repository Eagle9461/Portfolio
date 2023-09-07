import { gql } from "@apollo/client";

export default {
  Queries: {
    getExperience: gql`
      query GetExperience {
        resumes {
          badge
          desc
          experience
          id
          logo {
            url
          }
          subTitle
          title
          sort
        }
      }
    `,

    getSkills: gql`
      query GetSkills {
        skills {
          id
          cloud
          backEnd {
            field
            id
            value
          }
          frontEnd {
            field
            id
            value
          }
          languages {
            field
            id
            value
          }
        }
      }
    `,
  },
};
