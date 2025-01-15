import './App.css'

// import { DangerButton, SucessButton } from './components/Button';
import DynamicComponent from './components/DynamicComponent';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import RandomNumber from './components/RandomNumber';
import StudentsList from './components/StudentsList';
import Title from './components/Title';
import Button from './components/Button';


function App() {

  const studentList1 = ["Guddu", "Rahul", "Amit", "Sunil", "Sumit", "Anand"];

  const studentList2 = ["Rohit", "Rahul", "Virat", "Amit", "Sudhir",];

  const btnText = "Save";
  const btnType = "sucess";


  return (
    <>
      <Title textTitle="Guddu Singh Rathore"></Title>
      <Title textTitle="Rahul Singh Rathore"></Title>
      <Title textTitle="Anil  Singh Rathore"></Title>
      <Title textTitle="Undfe"></Title>
      <Heading />
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />
      <Paragraph />

      <Button btnText={btnText} btnType={btnType}/>
      <Button btnText="delete" btnType="danger"/>
      <Button btnText="click me" />

      <StudentsList student={studentList2} />
      
      <DynamicComponent />
      <StudentsList student={studentList1} />

    </>
  )
}

export default App
