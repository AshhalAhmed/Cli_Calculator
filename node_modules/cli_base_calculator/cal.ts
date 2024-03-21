#! /usr/bin/env node
import inquirer from "inquirer";
const cal=await inquirer.prompt(
    [{
        name:"firstnumber",type: 'number',message:'Enter the first number'
    },
    {
        name:"secondnumber",type: 'number',message:'Enter the Second number'
    },
    
    {
        name:"operator", type :"list", message:"Select an operator to perform on the numbers.",choices:[
            "+","-","*","/"]
    }]
 
)
if(cal.operator ==="+"){
   console.log(`The result of ${cal.firstnumber} + ${cal.secondnumber} is ${cal.firstnumber+cal.secondnumber}`)}
else if(cal.operator ==="-"){
    console.log(`The result of ${cal.firstnumber} - ${cal.secondnumber} is ${cal.firstnumber-cal.secondnumber}`)}
else if(cal.operator==="*"){
    console.log(`The result of ${cal.firstnumber} * ${cal.secondnumber} is ${cal.firstnumber*cal.secondnumber}`)}
else if(cal.operator === "/"){
    console.log(`The result of ${cal.firstnumber} /${cal.secondnumber} is ${cal.firstnumber/cal.secondnumber}`)}
else{
    "ENTER VALID CHOICE"
}


