document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector('#step12 button');
  var button2 = document.querySelector('#step3456 button');
  var section2 = document.querySelector('#step3456');
  var button7 = document.querySelector('#step7')
  var section7 = document.querySelector('#step7')
  var button8 = document.querySelector('#step8')
  var section7 = document.querySelector('#step8')
  var button9 = document.querySelector('#step9')
  var ul = document.querySelector('#car')

  button.addEventListener( 'click', function() {

    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text',
    }).done(function(responseData){
      console.log('request suceeded')
      });
    })

  button2.addEventListener( 'click',function(){
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',
    }).done(function(responseData){
      console.log(responseData)
      var newElem = document.createElement('p')
      newElem.innerTEXT = responseData;
      section2.appendChild(newElem);
    }).fail(function(responseData){
      console.log(responseData.responseText);
    }).always(function(){
      console.log("hey the request finished");
    })
  })
  button7.addEventListener( 'click',function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text',
    }).done(function(responseData){
      console.log(responseData)
    })
  });

  button8.addEventListener('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/time',
    method: 'GET',
    data: {'timezone': 'America/Mexico_City'},
    dataType:'text',
    }).done(function(responseData){
      console.log(responseData)
    });
  });

  button9.addEventListener('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/a_car',
    method: 'GET',
    dataType:'html',
    }).done(function(responseData){
      console.log(responseData)
      var list = document.createElement('li');
      list.innerTEXT = responseData;
      ul.appendChild(list);
    }).fail(function(){
      console.log("fail")
    })
  })
});
