import { gql } from "@apollo/client"

export default {
  Queries: {
    getProfile: gql`
      query GetProfile {
        owners {
          cv
          name
          ownersPhoto {
            url
          }
          bgImages {
            url
          }
        }
      }
    `,

    getNameImage: gql`
      query GetProfile {
        owners {
          name
          ownersPhoto {
            url
          }
        }
      }
    `,

    getBio: gql`
      query GetBio {
        owners {
          bio
        }
      }
    `,
    
    getPrices: gql`
      query GetPrices {
        prices {
          id
          packageName
          packagePrice
          priceType
          freelanceUrl
          packageServices {
            id
            isIncluded
            packageService
          }
        }
      }
    `,

    getTestimonials: gql`
      query GetTestimonials {
        testimonials {
          id
          userName
          userProfession
          quote
          userImage {
            url
          }
        }
      }
    `,
  },
}
