$(function(){ 
  var step_num = -3;  
  
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
     case 0:
       $(currStepId).animate({top: '240px', left: '-100px'}, 1000);
       break;
     default:
     }
  }

});