// Provide persistence solution code here
const persistSubmittedContact = (contact) => {
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
           xhr.open('POST','http://localhost:3000/contacts',true);
           xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(contact));   
       }).catch((response)=>{
           
       })
}

// Code to show the persisted data
const showPersistedData = () => {
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
           xhr.open('GET','http://localhost:3000/contacts',true);
           xhr.onload=function(){
            try{   
            resolve(xhr.response);
            }catch(e){
                reject(e);
            }
            }
            xhr.onerror=function(){
                reject(new Error("Network Error"));
            }
            xhr.send();
})
}

 
module.exports = { persistSubmittedContact, showPersistedData }
