

export default async function AuthorizedUser() {
    const name = localStorage.getItem('CTM_UserName')
    const key = localStorage.getItem('CTM_UserKey')
    if (key === ""){
      localStorage.setItem('CTM_logedIn', false)
    }
    const data = await fetch("/authorizedUser",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"name": name, "key": key})
      })
      const json = await data.json()
      
    if (json.key ===  key) {
      console.log("Youpi l'aventure continue")
      localStorage.setItem('CTM_logedIn', true)
    } else {
      console.log("Ah là il faut se connecter")
      localStorage.setItem('CTM_logedIn', false)
    }
    
    
}