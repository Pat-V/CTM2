

export default async function AuthorisedUser() {
    
  
    
    const name = localStorage.getItem('CTM_UserName')
    const key = localStorage.getItem('CTM_UserKey')
    if (key === ""){
      return false
    }
    const data = await fetch("/authorizedUser",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"name": name, "key": key})
      })
      const json = await data.json()
      console.log("json: ", json)
    
    
}