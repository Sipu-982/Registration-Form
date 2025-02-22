const studentForm = document.getElementById("studentForm");


studentForm.addEventListener("submit",async (e)=>{
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const college = document.getElementById("college").value;
    const description = document.getElementById("desc").value;


    const emailValid= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailValid.test(email)) {
        alert("Please enter a valid email address");
        return;
    }
   if(!name||!email||!college||!description){
    alert("All fields are mandatory")
   }
    console.log("Form data:", {name,email,college,description});

    try {

        const reqestBody = JSON.stringify({name,email,college,description});
        console.log("request body",reqestBody);
        const response = await fetch("https://crudapp-m2nk.onrender.com/api/products",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: reqestBody
        });

        console.log("api response", response);
        

        if(response.ok){
            alert("Student Added Successfully");
            studentForm.reset();
        }
        // else{
        //     alert("All fields are required")
        // }
    } catch (error) {
        console.error("error",error);
}
})