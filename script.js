// Business Name Generator
/* Create Business name generator by combinning list of adjectives, shop name and other words */
/* Adjective => Crazy, Amazing, Fire || Shop Name => Engine, Foods, Garments || Other Words => Bros, Limited, Hub */
/* Note : Don't Use Array to creating this app */

function genName() {
    let rand = Math.random();
    let keyWord = document.getElementById("keyword").value;
    let res = document.getElementById("result");

    let name_arr = ["Crazy", "Amazing", "Fire Works", "Engine", "Food Court", "Garments", "Cloth House", "Bros", "Pvt Limited", "Hub", "Enterprises", "Solutions", "Studios", "World", "Palace", "Point", "Technologies"];

    if (keyWord === "") {
        document.getElementById("warn").innerText = "Warning: Enter at least one Keyword.";
        document.getElementById("warn").style.color = "yellow";
        document.getElementById("result").value = "Error..❌";

    }
    else {
        const n = name_arr.length;
        rand = Math.floor(Math.random() * n);
        res.value = `${keyWord} ${name_arr[rand]}`;
        document.getElementById("warn").innerText = "";
    }
}

function refresh() {
    window.location.reload();
}