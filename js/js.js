    function RandomWord() {
        var requestStr = "http://randomword.setgetgo.com/get.php";
        $.ajax({
            type: "GET",
            url: requestStr,
            dataType: "jsonp",
            jsonpCallback: 'RandomWordComplete'

        });
    }

    function RandomWordComplete(data) {
        alert(data.Word);
    }

$('#click').click(function(){
    RandomWord();
    $('#click').innerHTML('click again if you want to change the word to guess')
});
