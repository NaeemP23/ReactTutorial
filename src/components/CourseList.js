import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Button, Container, Message, Title } from "rbx";
import React, { useState, useEffect } from 'react';
import 'rbx/index.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const buttonColor = selected => (
  selected ? `button is-success is-selected` : 'button'
);



const Course = ({ course, state, user }) => (
  <Button color={ buttonColor(state.selected.includes(course)) }
    onClick={ () => state.toggle(course) }
    onDoubleClick={ user ? () => moveCourse(course) : null }
    disabled={ hasConflict(course, state.selected) }
    >
    { getCourseTerm(course) } CS { getCourseNumber(course) }: { course.title }
  </Button>
);

const CourseList = ({ courses }) => {
  const [term, setTerm] = React.useState('Fall');
  const [selected, toggle] = useSelection();
  const termCourses = courses.filter(course => term === getCourseTerm(course));

  return (
    <React.Fragment>
      <TermSelector state={ { term, setTerm } } />
      <div className="buttons">
        { termCourses.map(course =>
           <Course key={ course.id } course={ course }
             state={ { selected, toggle } } />) }
      </div>
    </React.Fragment>
  );
};

export default CourseList;
