import test from "ava";
import rmp from "../src";

const carletonUniversityID = "U2Nob29sLTE0MjA=";

test("Search Teacher by Name & SchoolID", async (t) => {
  const teacher = await rmp.searchTeacher(
    "Alina Shaikhet",
    carletonUniversityID
  );

  t.snapshot(teacher);
});

//!Put the below in documentation
/*
(async () => {
  const teacher = await rmp.searchTeacher("Alina Shaikhet", carletonUniversityID);
  console.log(teacher);
})();*/
