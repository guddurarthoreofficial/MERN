function DynamicComponent() {

  const studentName = "Guddu Kumar";
  const mark = [76,86,55,87,98];

  const markLength = mark.length;

  const calMark = ()=>{
    let totalMark = 0;
    for(let i = 0; i < markLength; i++){
      totalMark += mark[i];
    }

    return totalMark/markLength;
  }
  return (
    <>
      <p>{studentName} Scored {calMark()}% Marks in this Exam.</p>
    </>
  );
}

export default DynamicComponent;
