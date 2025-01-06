

export const registerFunc=()=>{
       const regForm=document.querySelector(".reg-form");
       const allInputs=regForm.querySelectorAll("INPUT");
       regForm.onsubmit=(e)=>{
        e.preventDefault();
        if(allInputs[1].value!="" && allInputs[3].value!=""){
            const obj={
                name:allInputs[0].value,
                email:allInputs[1].value,
                mobile:allInputs[2].value,
                password:allInputs[3].value
            }
            alert(JSON.stringify(obj))
           }
           else{
             swal("REquired","All Field are Required","warning")
           }
        
        }
        
        
}