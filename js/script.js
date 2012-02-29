$(function(){ 
  var step_num = 0;  
  
  $('body').live('keyup', function(e){    
    if (e.which == 77) { step_num++; }
    if (e.which == 78) { step_num--; }
    
    stepHandler(step_num);
    return step_num;
  });
  
  function stepHandler(step_num) {
    var currStepId = '#ss' + step_num;
    $(currStepId).show();
    
    switch(step_num) {
     case 1:
       $('#ss1').show();
       break;
     case 2:
       $('#ss2').show();
       break;
     default:
     }
  }

});