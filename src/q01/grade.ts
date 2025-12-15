if (process.argv.length < 3) {
    console.error("Error: Please provide a single number as a command-line argument.");
    process.exit(1);
}
let num = parseInt(process.argv[3]);
if(num <0 || num > 100) process.exit(1);
switch(num) { 
   case 1: { 
    if(num>=80){ 
        console.log("Grade A");
    }

      break; 
   } 
   case 2: { 
    if(num>=70){ 
        console.log("Grade B");
    }
      break; 
   } 
   case 3: { 
    if(num>=60){ 
        console.log("Grade C");
    }

      break; 
   } 
   case 4: { 
    if(num>=50){ 
        console.log("Grade D");
    }

      break; 
   } 
   case 5: { 
    if(num<50){ 
        console.log("Grade F");
    }

      break; 
   } 
   
} 