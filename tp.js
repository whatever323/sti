generatedCaptcha = "";

    function generateCaptcha() {
        const length = parseInt(document.getElementById("lengthSelect").value);
        const type = document.getElementById("typeSelect").value;

        let chars = "";

        if (type === "alpha") chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        else if (type === "num") chars = "0123456789";
        else chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        let captcha = "";
        for (let i = 0; i < length; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        generatedCaptcha = captcha;
        document.getElementById("captcha").textContent = captcha;
        document.getElementById("message").textContent = "";
    }

    function verifyCaptcha() {
        const userValue = document.getElementById("userInput").value.trim();
        const msg = document.getElementById("message");

        if (userValue.toUpperCase() === generatedCaptcha.toUpperCase() && generatedCaptcha !== "") {
            msg.style.color = "green";
            msg.textContent = "Captcha correct !";
        } else {
            msg.style.color = "red";
            msg.textContent = " Captcha incorrect !";
        }
    }

