let captchaText=" ";
function generateCaptcha(){
    const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    captchaText = "";
    for(let i=0;i<6;i++){
        captchaText+=chars.charAt(Math.floor(Math.random()*chars.length));
    }
    document.getElementById("captcha").textContent=captchaText;
}

function verifyCaptcha(){
    const userCaptcha=document.getElementById("userInput").value;
    if(userCaptcha==captchaText){
        alert("CAPTCHA Verified Successfully.");
    } else{
        alert("CAPTCHA Verification Failed.Please try again.");
    }
    generateCaptcha();
    document.getElementById("userInput").value=" ";
}