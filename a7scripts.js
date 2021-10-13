$(window).on('load', function(){


    
   

$(init);

$('#deal').click(function() {
    dealCard(randomCard());
});

function init() {
    $('.drop').droppable({
        drop: handleDropEvent
    });
}
var cardsInDeck = new Array();
var numberOfCardsInDeck = 52;
cardsInDeck[0] = "C1";
cardsInDeck[1] = "C2";
cardsInDeck[2] = "C3";
cardsInDeck[3] = "C4";
cardsInDeck[4] = "C5";
cardsInDeck[5] = "C6";
cardsInDeck[6] = "C7";
cardsInDeck[7] = "C8";
cardsInDeck[8] = "C9";
cardsInDeck[9] = "C10";
cardsInDeck[10] = "C11";
cardsInDeck[11] = "C12";
cardsInDeck[12] = "C13";
cardsInDeck[13] = "D1";
cardsInDeck[14] = "D2";
cardsInDeck[15] = "D3";
cardsInDeck[16] = "D4";
cardsInDeck[17] = "D5";
cardsInDeck[18] = "D6";
cardsInDeck[19] = "D7";
cardsInDeck[20] = "D8";
cardsInDeck[21] = "D9";
cardsInDeck[22] = "D10";
cardsInDeck[23] = "D11";
cardsInDeck[24] = "D12";
cardsInDeck[25] = "D13";
cardsInDeck[26] = "H1";
cardsInDeck[27] = "H2";
cardsInDeck[28] = "H3";
cardsInDeck[29] = "H4";
cardsInDeck[30] = "H5";
cardsInDeck[31] = "H6";
cardsInDeck[32] = "H7";
cardsInDeck[33] = "H8";
cardsInDeck[34] = "H9";
cardsInDeck[35] = "H10";
cardsInDeck[36] = "H11";
cardsInDeck[37] = "H12";
cardsInDeck[38] = "H13";
cardsInDeck[39] = "S1";
cardsInDeck[40] = "S2";
cardsInDeck[41] = "S3";
cardsInDeck[42] = "S4";
cardsInDeck[43] = "S5";
cardsInDeck[44] = "S6";
cardsInDeck[45] = "S7";
cardsInDeck[46] = "S8";
cardsInDeck[47] = "S9";
cardsInDeck[48] = "S10";
cardsInDeck[49] = "S11";
cardsInDeck[50] = "S12";
cardsInDeck[51] = "S13";

function dealCard(i) {
    if (numberOfCardsInDeck == 0) return false;
    var img = document.createElement("img");
    img.src = "https://rdezerga.github.io/portfolio/playingCards" + cardsInDeck[i] + ".png";
    img.id = cardsInDeck[i];
    img.alt = cardsInDeck[i];
    img.width = 100;
    img.height = 150;
    document.body.appendChild(img);
    $(img).draggable();
    removeCard(i);
}
function randomCard() {
    return Math.floor(Math.random() * numberOfCardsInDeck);  
}

function removeCard(c)
{
    
    for (j=c; j <= numberOfCardsInDeck - 2; j++)
    {
        cardsInDeck[j] = cardsInDeck[j+1];
    }
    numberOfCardsInDeck--;
}
function handleDropEvent(_event, ui) {
    var draggable = ui.draggable;
    $('#drop').html(draggable.attr('id') + ' was discarded!');
    hideImage(draggable);
  }
  
  function hideImage(img) {
    $(img).hide();
  }
});