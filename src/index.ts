import { GraphQLClient } from "graphql-request";
import { getTeacherByNameSchoolQuery } from "./queries";
import { AUTH_TOKEN } from "./constants";

const client = new GraphQLClient("https://www.ratemyprofessors.com/graphql", {
  headers: {
    authorization: `Basic ${AUTH_TOKEN}`,
  },
});

export interface TeacherFromSearch {
  id: string;
  legacyId: number;
  firstName: string;
  lastName: string;
  avgRating: number;
  avgDifficulty: number;
  numRatings: number;
  wouldTakeAgainPercent: number;
  school: {
    id: string;
    name: string;
  };
}

const searchTeacher = async (
  name: string,
  schoolID: string
): Promise<TeacherFromSearch | undefined> => {
  const response: any = await client.request(getTeacherByNameSchoolQuery, {
    text: name,
    schoolID,
  });

  if (response.newSearch.teachers === null) {
    return undefined;
  } else {
    return response.newSearch.teachers.edges[0]?.node;
  }
};

export default { searchTeacher };