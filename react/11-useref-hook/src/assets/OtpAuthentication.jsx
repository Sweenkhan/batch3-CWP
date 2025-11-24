import React, { useEffect, useRef, useState } from 'react'

function OtpAuthentication() {

    const inputs = useRef([])
    const [otpValue, setOtpValue] = useState("")


    function handleChange(e, index){
        const value = e.target.value

        if(value.length === 1 && index < inputs.current.length - 1){
            inputs.current[index + 1].focus()
        }

        updateOTP()
    }

    function updateOTP(){
        let otpdata = inputs.current.map((input) => input.value).join('')
        setOtpValue(otpdata)
    }


    function handleSubmit(){
    console.log(otpValue)
      inputs.current.map((input) => input.value = "")
    }

    function handleKeyDown(e, index){
        if(e.key === "Backspace" && !e.target.value && index > 0){
            inputs.current[index-1].focus()
        }
    }

    useEffect(() => {
        inputs.current[0].focus()
    }, [])


  return (
    <div> 
        <h2>OTP Authentication</h2>
        <div>
            {
                [0, 1, 2, 3, 4, 5].map((_, index) => {
                    return(
                        <input 
                        key={index}
                        type='text'
                        maxLength="1"
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}

                        style={{
                            width: "40px",
                            height :"40px",
                            textAlign: "center",
                            fontSize: "20px"
                        }}

                        ref={(el) => (inputs.current[index] = el)}
                        />

                    )
                })
            }
            <button onClick={handleSubmit}>submit</button>
        </div>
    </div>
  )
}

export default OtpAuthentication