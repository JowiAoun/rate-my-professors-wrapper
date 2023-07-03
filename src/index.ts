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

const searchTeacher = async (name: string, schoolID: string): Promise<TeacherFromSearch[]> => {
  const response: any = await client.request(getTeacherByNameSchoolQuery, {
    text: name,
    schoolID
  });

  if (response.newSearch.teachers === null) {
    return [];
  }

  return response.newSearch.teachers.edges.map((edge: { node: TeacherFromSearch }) => edge.node);
};


//! Testing
(async () => {
  const result = await searchTeacher("Alina Shaikhet", "U2Nob29sLTE0MjA=");
  console.log(result);
})();
