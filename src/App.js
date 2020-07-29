import React , { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

//React components can be either FUnctional or with class as shown below

function App() {

  const [courseGoals, setCourseGoals] = useState([
    { id: 'cp1', text: 'Finish the Course'},
    { id: 'cp2', text: 'Finish the Course d matisha'},
    { id: 'cp3', text: 'Finish the Course dohrir'},
  ]);


  //push modifies the ancient array not like concat which brings new array
  const addNewGoalHandler = (newGoal) => {
    /** 
    courseGoals.push(newGoal);
    console.log(courseGoals);
    */
   //setCourseGoals(courseGoals.concat(newGoal)); to better schedule use this
   setCourseGoals((precCourseGoals) => {
     return precCourseGoals.concat(newGoal);
   });
  };

  return (
   //React.createElement('h1', {}, 'Hi , this is react')
    <div className="course-goals">
      <h2>
        Course Goals
      </h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>   
  );
}

/* this is with class 
class App extends React.Component {
  render() {
    return <h1>Hi, this is React !</h1>
  }
}
*/

export default App;
