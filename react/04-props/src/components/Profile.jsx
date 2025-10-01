 function Profile({name, age, email}) {

    

  return (

    <div className='profile' style={{border: "1px solid black", borderRadius: "1rem", padding: "1rem"}}>
          <img />
          <h2>{name}</h2>
          <p>Age {age}</p>
          <p>{email}</p>
        </div>
  )
}

export default Profile








// let profile = {
//     name: "rakesh",
//     age: 23,
//     email: "rakesh@gmail.com"
// }

//  let {name, age, email} = profile

 