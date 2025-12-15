if (process.argv.length < 3) {
    console.error("Invalid Input");
    process.exit(1);
}
var num = +(process.argv[3]);
if (num < 0 || num > 100) {
    console.error("Invalid Input");
    process.exit(1);
}
switch (num) {
    case 1: {
        if (num >= 80) {
            console.log("Grade is A");
        }
        break;
    }
    case 2: {
        if (num >= 70) {
            console.log("Grade is B");
        }
        break;
    }
    case 3: {
        if (num >= 60) {
            console.log("Grade is C");
        }
        break;
    }
    case 4: {
        if (num >= 50) {
            console.log("Grade is D");
        }
        break;
    }
    case 5: {
        if (num < 50) {
            console.log("Grade is E");
        }
        break;
    }
}
