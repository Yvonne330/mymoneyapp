"use client";

export default function Page(){

 function handleClickmenow(){
   var age = 13+1;
   alert(age);

   age=45;
   alert(age);


    age += 20*2;
    alert(age);
 }

    return(
        <div>
            <button onClick={handleClickmenow}>Click Me</button>
            <p>This will output the number of times the button was clicked</p>
        </div>
    )
    
}