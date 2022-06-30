let options = {
    startAngle: -1.55,
    size: 100,
    value: 0.95,
    fill: {gradient: ['rgb(191, 7, 207)']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.80
  });
  $(".Sql .bar").circleProgress({
    value: 0.65
  });
  $(".Php .bar").circleProgress({
    value: 0.70
  });