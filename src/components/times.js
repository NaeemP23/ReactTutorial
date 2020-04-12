

const getCourseTerm = course => (
  terms[course.id.charAt(0)]
);

const getCourseNumber = course => (
  course.id.slice(1, 4)
);

const hasConflict = (course, selected) => (
  selected.some(selection => courseConflict(course, selection))
);

export { getCourseNumber, getCourseTerm, hasConflict };
