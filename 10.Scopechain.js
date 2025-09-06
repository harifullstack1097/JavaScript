// Block1 - Scope1
let color1 = "red";

{
    // Block2 - Scope2
    let color2 = "blue";

    {
        // Block3 - Scope3
        console.log("Scope3 - color1:", color1);  // Accessible (outer scope)
        console.log("Scope3 - color2:", color2);  // Accessible (outer scope)

        let color3 = "green";
        console.log("Scope3 - color3:", color3);  // Defined in this block
    }

    // Back to Block2
    console.log("Scope2 - color1:", color1);      // Accessible
    console.log("Scope2 - color2:", color2);      // Accessible
    // console.log("Scope2 - color3:", color3);  //Not Accessable

}

// Back to Block1
console.log("Scope1 - color1:", color1);          // Accessible
// console.log("Scope1 - color2:", color2);       //Not Accessable
// console.log("Scope1 - color3:", color3);       //Not Accessable