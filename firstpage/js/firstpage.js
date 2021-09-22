var trans1 = function() {
    var wordChange = document.getElementsByClassName("Flight");
    wordChange[0].innerHTML = "首頁";
    wordChange[1].innerHTML = "這是一個我自己在練習的專案，希望可以透過這東西，做出屬於我的世界，也希望可以做到許多不同的功能。";
}
var trans2 = function() {
    var wordChange = document.getElementsByClassName("Flight");
    wordChange[0].innerHTML = "關於我";
    wordChange[1].innerHTML = "一個想要改變世界的男人";
}

var link = function(goto) {
    alert(goto);
    if (goto === "google") {
        location.href = 'https://www.google.com/'
    } else if (goto === "yahoo") {
        location.href = 'https://tw.yahoo.com/'
    }
}