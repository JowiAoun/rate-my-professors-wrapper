import { gql } from "graphql-request";

//TODO: create a query to get a school's ID by its name

export const getTeacherByNameSchoolQuery = gql`
  query GetTeacherByNameSchoolQuery($text: String!, $schoolID: ID!) {
    newSearch {
      teachers(query: { text: $text, schoolID: $schoolID }) {
        # text(string): the full name of the teacher
        # schoolID(string): the ID given to the school
        edges {
          node {
            id
            legacyId # used to create URL to teacher's RMP page
            firstName
            lastName
            school {
              name
              id
            }
            avgRating
            avgDifficulty
            numRatings
            wouldTakeAgainPercent
          }
        }
      }
    }
  }
`;