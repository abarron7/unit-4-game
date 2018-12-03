function startGame() {


    var targetNumber = Math.floor((Math.random() * 76) + 25);

    $("#number-to-reach").text(targetNumber);

    var counter = 0;

    var numberOptions = [Math.floor((Math.random() * 5) + 1), Math.floor((Math.random() * 25) + 19), Math.floor((Math.random() * 18) + 11), Math.floor((Math.random() * 10) + 1)];

    for (var i = 0; i < numberOptions.length; i++) {

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "https://usercontent2.hubstatic.com/13975493_f496.jpg");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        $("#crystals").append(imageCrystal);
    }

    $(".crystal-image").on("click", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        alert("New score: " + counter);

        if (counter === targetNumber) {
            alert("You win!");
            resetGame();
        } else if (counter >= targetNumber) {
            alert("You lose!!");
            resetGame();
        }

    });
}
startGame();

function resetGame() {
    location.reload();

}