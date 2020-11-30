//pie
    var ctxP = document.getElementById("pieChart").getContext('2d');
    var myPieChart = new Chart(ctxP, {
      type: 'pie',
      data: {
        labels: ["digital Transformer","Web developer"],
        datasets: [{
          data: [42,58],
          backgroundColor: ["#ad5389","#3c1053"],
          hoverBackgroundColor: ["#D8BFD8", "#EE82EE"]
        }]
      },
      options: {
        responsive: true
      }
    });


// to validate the contact page in the contact form
    function validateForm(){
      var email = document.forms["myform"]["email"].value;
      var subject = document.getElementById('text').value;
      if (email=="" && subject==""){
        alert("Please fill out your email and write what is your subject");
        return false;
      }else {
        if (email==""){
          alert("Please fill out your Email");
          return false;
        }else {
          if(subject==""){
            alert("Please write to me what is the subject");
            return false;
          }
        }
      }
    }
