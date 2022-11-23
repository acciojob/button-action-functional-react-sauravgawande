import React,{useState} from 'react'

function ButtonComponent() {

    const [count,setCount] = useState(false);
    
    let click=()=>{
        return ()=>setCount(!count);
    }
  return (
    <div>

          {count ? <p>
              Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
          </p> : null}
        <button onClick={click}>
            click
        </button>
    </div>
  )
}

export default ButtonComponent