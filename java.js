$(document).ready(function () {

  $(".bt1").click(function () {
      $("#exampleModal").modal('hide');
  });

  $(".form1").submit(function (event) {
      event.preventDefault();

      var head = $(".heading").val();
      
      $("main").append("<section><h1> " + head + "</h1></section>");
     
      $('#select1 option').remove();
      $('#select1').append('<option> Select Heading </option>');

      
      $('#select2 option').remove();
      $('#select2').append('<option> Select Heading </option>');
      


      $('main section h1').each(function (index, value) {

          $("#select1").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
       
      });

      $('main section h1').each(function (index, value) {

          $("#select2").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
 
      })
      

  });

  $(".form2").submit(function (event) {
      event.preventDefault();
      var subheading = $(".subheading").val();
      if (subheading == "") {
          
          return false;
      }
      else {
          var head = $("#select1 option:selected").val();
        
          $("main section:nth-child(" + head + ") ").append("<div><h3>" + subheading + "</h3></div>");
          // $('').remove();

      }
      var subheading = $(".subheading").val();
      $('#select2').on('click',function(){
        // $('#select3, option').remove();
        $('#select3').append("<div><h3>" + subheading + "</h3></div>");
        $('#select3 option ').remove();
       
        // var subheading = $(".subheading").val();
        
       $('main section div h3:nth-child('+ head +')').each(function (index, value) {
       
        $("#select3").append("<option value=" + (index + 1) + ">" + $(this).text() + "</option>");
       
     });
    });
  });
  

  $("#bt3").click(function () {
      $("#modal3").modal('show');
  });

  $(".form3").submit(function (event) {
      event.preventDefault();

     $('#select2').change(function(){
        $('#select3').siblings('main section div h3');
     });
      var label = $(".one").val();
      $("main").append("<section><form><label> " + label + "</label></form><section>");
      

      var type1 = $("#select4 option:selected").val();
      var class1 = $(".two").val();
      var value1 = $(".three").val();
      var place1 = $(".four").val();
      $("main section form").append("<input type="+type1+" class="+class1+" value="+value1+" placeholder="+place1+">")

     
  });
});

