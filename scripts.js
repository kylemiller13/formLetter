$(document).ready(function(){
  $("#userinfo").submit(function(){
    event.preventDefault();
    const name1 = $("input#name").val();
    const address1 = $("input#address").val();
    const city1 = $("input#city").val();
    const state1 = $("input#state").val();
    const zip1 = $("input#zip").val();

    $(".name").text(name1);
    $(".address").text(address1);
    $(".city").text(city1);
    $(".state").text(state1);
    $(".zip").text(zip1);

    $(".hide").show();
  });
});