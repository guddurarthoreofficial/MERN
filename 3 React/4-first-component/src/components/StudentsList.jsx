function StudentsList(props) {

  console.log(props.student);

  return (
    <>
      <ol>
        {props.student.map((studentdata, index) => {
          return <li key={index}>{studentdata}</li>;
        })}
      </ol>
    </>
  );
}

export default StudentsList;
