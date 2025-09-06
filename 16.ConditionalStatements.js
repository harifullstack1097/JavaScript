//  Coditional statements -if, else, if else

let isHDFCBankAccess = false;
let isSBIBankAccess = false;
let isICiciBankAccess = true;



if (isHDFCBankAccess) {
    console.log("YOu are belonging to the hdfc bank");
}
else if (isSBIBankAccess) {
    console.log("YOu are belonging to the sbi bank");
}
else if (isICiciBankAccess) {
    console.log("YOu are belonging to the icici bank");
}
else {
    console.log("you do't the account");
}


let day = 14;

switch (day)
 {
    case 1: {
        console.log("Monday");
        break;
    }
    case 2: {
        console.log("Tuesday");
        break;
    } case 3: {
        console.log("Wednesday");
        break;
    } case 4: {
        console.log("thursday");
        break;
    } case 5: {
        console.log("friday");
        break;
    } case 6: {
        console.log("saturday");
        break;
    }
    case 7: {
        console.log("sunday");
        break;
    }
    default: {
        console.log("your input is wrong .please check the proper input")
    }


}