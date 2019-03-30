
let button=document.getElementById('button');
function convertToVnd() {
    const conversion = 23262;
    let vndAmount = 50*conversion
    //   document.write("50 USD is " + vndAmount + " VND");
      document.write(`50 USD is ${vndAmount} VND`);
}

document.addEventListener("click", convertToVnd);