var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Threat Agent', 'Vlunerability Factors', 'Technical Impact', 'Business Impact'],
                datasets: [{
                    label: 'Score',
                    data: [],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMin:0,
                        suggestedMax:10
                    }
                }
            }
        });

        updateChart();
    function calc_score()
    {
      var LS = 0;
      var IS = 0;
      var dataset = [];
      var TA =  parseInt(document.getElementById('sl').value)+ 
                parseInt(document.getElementById('motive').value)+ 
                parseInt(document.getElementById('oppor').value) + 
                parseInt(document.getElementById('size').value);
                
      var VF =  parseInt(document.getElementById('eod').value) + 
                parseInt(document.getElementById('eoe').value) + 
                parseInt(document.getElementById('aware').value) + 
                parseInt(document.getElementById('intrude').value) + 0;
        
        LS = TA + VF;
        TA = (TA/4).toFixed(3);
        dataset.push(TA);
        VF = (VF/4).toFixed(3);
        dataset.push(VF);
      var LS = (LS/8).toFixed(3);
     
    
      var s1 = document.getElementById('threat_score');
      s1.innerHTML = TA;
      if(TA < 3)
      {
       s1.className = "";
       s1.classList.add('btn');
       s1.classList.add('brightgreen');
      }
      else if(TA >= 3 && TA < 6)
      {
       s1.className = "";
       s1.classList.add("btn");
       s1.classList.add('brightyellow');
      }
      else
      {
       s1.className = "";
       s1.classList.add('btn');
       s1.classList.add('brightred');
      }

      
      var s2 = document.getElementById('vuln_score');
      s2.innerHTML = VF;
      if(VF < 3)
      {
       s2.className = "";
       s2.classList.add('btn');
       s2.classList.add('brightgreen');
      }
      else if(VF >= 3 && VF < 6 )
      {
       s2.className = "";
       s2.classList.add("btn");
       s2.classList.add('brightyellow');
      }
      else
      {
       s2.className = "";
       s2.classList.add('btn');
       s2.classList.add('brightred');
      }

     var score_LS = 0;
     var s3 = document.getElementById('like_score');
     s3.innerHTML = LS;
     if(LS < 3)
     {
      s3.className = "";
      s3.classList.add('btn');
      s3.classList.add('brightgreen');
      score_LS = 0;
     }
     else if(LS >= 3 && LS < 6 )
     {
      s3.className = "";
      s3.classList.add("btn");
      s3.classList.add('brightyellow');
      score_LS = 1;
     }
     else
     {
      s3.className = "";
      s3.classList.add('btn');
      s3.classList.add('brightred');
      score_LS = 2;
     }
     

      var TI =  parseInt(document.getElementById('loc').value)+ 
                parseInt(document.getElementById('loi').value)+ 
                parseInt(document.getElementById('loa').value) + 
                parseInt(document.getElementById('loacc').value);

      var BI =  parseInt(document.getElementById('finan').value) + 
                parseInt(document.getElementById('reput').value) + 
                parseInt(document.getElementById('comply').value) + 
                parseInt(document.getElementById('privacy').value) + 0;

        IS = TI + BI;
      var IS = (IS/8).toFixed(3);
      TI = (TI/4).toFixed(3);
      dataset.push(TI);
      BI = (BI/4).toFixed(3);
      dataset.push(BI);
      

      var s4 = document.getElementById('technical_score');
      s4.innerHTML = TI;
      if(TI < 3)
      {
       s4.className = "";
       s4.classList.add('btn');
       s4.classList.add('brightgreen');
      }
      else if(TI >= 3 && TI < 6 )
      {
       s4.className = "";
       s4.classList.add("btn");
       s4.classList.add('brightyellow');
      }
      else
      {
       s4.className = "";
       s4.classList.add('btn');
       s4.classList.add('brightred');
      }


      var s5 = document.getElementById('business_score');
      s5.innerHTML = BI;
      if(BI < 3)
      {
       s5.className = "";
       s5.classList.add('btn');
       s5.classList.add('brightgreen');
      }
      else if(BI >= 3 && BI < 6 )
      {
       s5.className = "";
       s5.classList.add("btn");
       s5.classList.add('brightyellow');
      }
      else
      {
       s5.className = "";
       s5.classList.add('btn');
       s5.classList.add('brightred');
      }


      var s6 = document.getElementById('impact_score');
      s6.innerHTML = IS;
      var score_IS = 0;
      
      if(IS < 2)
      {
       s6.className = "";
       s6.classList.add('btn');
       s6.classList.add('green');
       score_IS = 2;
     }
      else if(IS >= 0 && IS < 3)
     {
      s6.className = "";
      s6.classList.add('btn');
      s6.classList.add('brightgreen');
      score_IS = 2;
    }
     else if(IS >= 3 && IS < 5)
     {
      s6.className = "";
      s6.classList.add("btn");
      s6.classList.add('yellow');
      score_IS = 1;
     }
      else if(IS >= 5 && IS < 7)
     {
      s6.className = "";
      s6.classList.add("btn");
      s6.classList.add('brightyellow');
      score_IS = 1;
     }
     else if(IS >= 7 && IS < 9)
     {
        s6.className = "";
        s6.classList.add("btn");
        s6.classList.add('red');
        score_IS = 1;
       }
     else
     {
      s6.className = "";
      s6.classList.add('btn');
      s6.classList.add('brightred');
      score_IS = 0;
     }

     var matrix = [["Medium","High","Critical"],["Low","Medium","High"],["Note","Low","Medium"]]
     var o_score = document.getElementById('overall_score');
     var final_score = matrix[score_IS][score_LS]
     o_score.innerHTML = final_score;
     o_score.style.color = "black";
     if(final_score == "Note")
     {
      o_score.style.background = 'lightgreen';
     }
     else if(final_score == "Low")
     {
      o_score.style.background = "Yellow";
     }
     else if(final_score == "Medium")
     {
      o_score.style.background = "Orange"
     }
     else if(final_score == "High")
     {
      o_score.style.background = "Red"
     }
     else
     {
      o_score.style.background = "Pink";
     }
     updateChart(dataset);
     }
        
     function updateChart(dataset)
     {
      myChart.data.datasets[0].data = dataset
      myChart.update();
  }