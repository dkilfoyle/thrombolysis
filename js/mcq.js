function getFeedback(optionId, optionsNum, qid, mode) {
    for (i = 1; i<= optionsNum; i++) { 
		id = qid + "ans" + i
        if(i == optionId)
            document.getElementById(id).style.display = "block";
        else
            document.getElementById(id).style.display = "None";
    }
}

function convertMCQs() {

  $(".MCQ").each(function(index, value) {
  var qoptions = [];
  var qans = [];

  $(this).next().children().each(function(index, value) { 
    if (index % 2 ==0)
      qoptions.push($(this).text()) 
    else
      qans.push($(this).text())
  });

  $(this).next().remove();
  
  var mcqid = $(this).attr("id");
  
  var output="<div class='MCQ note'>\n<h5>" + $(this).text() + "</h5>\n<div class='MCQoptions'>\n";
  for (i = 0; i < qoptions.length; i++) {
	 output = output + "<input type='radio' name='" + mcqid + "' onclick='getFeedback(" + (i+1) + ", " + qoptions.length + ", &quot;" + mcqid + "&quot;)'><label>" + qoptions[i] +  "</label><br>\n";
  }
  output = output + "</div>\n";
  
  var output = output + "<div class='MCQanswers'>\n";
  for (i = 0; i < qans.length; i++) {
	 output = output + "<div id='" + mcqid + "ans" + (i+1) + "' style='display:none'>" + qans[i] + "</div>";
	}
  output = output + "</div>\n<div>Select the single best answer.</div>\n</div>\n";

  $(this).replaceWith($(output));
})
}

$(document).ready(function() { convertMCQs(); });