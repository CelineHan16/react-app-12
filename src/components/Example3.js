
// import Example2 from './Example2';

function Example3(props) {

  return (
    <div>
      {props.number} 
      <button onClick={props.addNumber}>+</button>
    </div>
  );
}

export default Example3;