// Add your code here
function submitData(name, email){
 return fetch("http://localhost:3000/users", {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json',
        'Accept': 'application/json' },
     body: JSON.stringify({name , email})
     
 }) 
 .then(res=> res.json())
 .then(obj=> {
 const h1 = document.createElement('h1');
 h1.textContent = obj.id;
 document.body.appendChild(h1)
    
 })
 .catch(res=> {
    const errMsg = document.createElement("p");
    errMsg.textContent = res.message;
    document.body.appendChild(errMsg);

 })
}


document.addEventListener('DOMContentLoaded', submitData)