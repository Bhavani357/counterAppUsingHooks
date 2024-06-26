import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRow } from './Store'

function App() {
  const dispatch = useDispatch()
  let data = useSelector((state)=>state.add)
  console.log(data)
  const [number1,setNumber1] = useState("")
  const [number2,setNumber2] = useState("")
  const [sum, setSum] = useState("")
  const [err,setErr] = useState("")

  useMemo(()=>{
    if(number1 !== "" && number2 !== ""){
      setSum(parseInt(number1)+parseInt(number2))
    }
  },[number1,number2])

  

  return (
    <div className='container mt-5'>
      <input type="number" className="m-3" value={number1} onChange={(event)=>setNumber1(event.target.value)}/>
      <input type="number" className="m-3" value={number2} onChange={(event)=>setNumber2(event.target.value)}/>
      <button type='button' className='btn btn-primary col-1' onClick={()=>{
        if(number1 !== "" && number2 !== ""){
          setErr("")
          dispatch(addRow({number1,number2,sum}))
        setNumber1("")
        setNumber2("")
        }else{
          setErr("Both inputValues are required")
        }
        
        
      }}>Add</button>
      <p className='text-danger'>{err}</p>
      <table className="table table-bordered w-50 mt-5">
        <thead>
          <tr>
            <th>Num1</th>
            <th>Num2</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          
          {data.map((eachRow,index)=>(
             <tr key={index}>
              <td>{eachRow.number1}</td>
              <td>{eachRow.number2}</td>
              <td>{eachRow.sum}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
      <h2></h2>

    </div>
    
  )
}

export default App
