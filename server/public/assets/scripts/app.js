$(document).ready( function() {
  $('#search').submit(function(event) {
      event.preventDefault();
      var values = {};
      $.each($(this).serializeArray(), function(i, field){
          values[field.name] = field.value;
      });


      $.ajax({
      type: "GET",
      url: "/data",
          data:values,
          success: function(data){
          appendDom(data);
              console.log(data);
      }
      })
  });


});

function appendDom (personData){

    $("#calledPerson").fadeOut(1500, function(){
        $(this).empty();

        for(var i =0; i < personData.length; i++) {
            console.log(personData[i].name);
            console.log(personData[i].animal);
            var el = "<div class= 'person btn btn-info'>" +
                "<div>" + personData[i].name + "</div>" +
                "<div>" + personData[i].animal + "</div>" +
                "</div>";

            $("#calledPerson").append(el).fadeIn(2000);
        }
    });





}