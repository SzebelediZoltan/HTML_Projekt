updateTotalAr()

var torles = document.getElementsByClassName("torles")
for (var i = 0; i < torles.length; i++) {
    var torlesButton = torles[i]
    torlesButton.addEventListener('click', function(event){
        var torlesNyom = event.target
        torlesNyom.parentElement.parentElement.remove()
        updateTotalAr()
    })
}

var darab = document.getElementsByClassName('darab')
for (var i = 0; i < darab.length;i++) {
    var darabButton = darab[i]
    darabButton.addEventListener('change', function(event){
        var darabNyom = event.target
        if (isNaN(darabNyom.value) || darabNyom.value <= 0) {
            darabNyom.value = 1
        }
        updateTotalAr()
    })
}

function updateTotalAr() {
    var cartRows = document.getElementsByClassName('kosar-tb-term')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var arElement = cartRow.getElementsByClassName('kosar-arr')[0]
        var ar = parseFloat(arElement.innerText.replace('Ft', ''))
        var darabElement = cartRow.getElementsByClassName('darab')[0]
        var darab = darabElement.value
        total = total + (ar * darab)
        document.getElementsByClassName('kosar-total')[i].innerText = (ar * darab) + "Ft"
    }

    document.getElementsByClassName('ar')[0].innerText = total + "Ft"
}