let userInput = document.querySelector("#date");
userInput.max=new Date().toISOString().split("T")[0];

const calculateAge =()=>{
   let birthDate= new Date(userInput.value);

   let y1=birthDate.getFullYear();
   let m1=birthDate.getMonth();
   let d1=birthDate.getDate();

   //date() gives us current date
   const today=new Date();

   let y2=today.getFullYear();
   let m2=today.getMonth();
   let d2=today.getDate();


   let y3,m3,d3;

   y3=y2-y1;
   m3=m2-m1;
   d3=d2-d1;

   if(d3<0){
    m3-=1;
    //this zero gives us last day of the previous month(since days start from 1)
    const daysInLastMonth = new Date(today.getFullYear(),today.getMonth(),0).getDate();
    d3+=daysInLastMonth;
   }
   if(m3<0){
    y3-=1;
    m3+=12;
   }

   const result=document.getElementById("result");
   result.innerText=`Your are ${y3} Years, ${m3} Months, ${d3} Days old.`;
}