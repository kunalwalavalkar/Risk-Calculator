var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
	type: "bar",
	data: {
		labels: [
			"Threat Agent",
			"Vulnerability Factors",
			"Technical Impact",
			"Business Impact"
		],
		datasets: [
			{
				label: "Score",
				data: [],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)"
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)"
				],
				borderWidth: 1
			}
		]
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
				suggestedMin: 0,
				suggestedMax: 10
			}
		}
	}
});

updateChart();
function calc_score() {
	var likelihoodScore = 0;
	var impactScore = 0;
	var dataset = [];

	var threatAgentScore =
		parseInt(document.getElementById("sl").value) +
		parseInt(document.getElementById("motive").value) +
		parseInt(document.getElementById("oppor").value) +
		parseInt(document.getElementById("size").value);

	var vulnerabilityScore =
		parseInt(document.getElementById("eod").value) +
		parseInt(document.getElementById("eoe").value) +
		parseInt(document.getElementById("aware").value) +
		parseInt(document.getElementById("intrude").value) +
		0;

	likelihoodScore = threatAgentScore + vulnerabilityScore;
	threatAgentScore = (threatAgentScore / 4).toFixed(3);
	dataset.push(threatAgentScore);
	vulnerabilityScore = (vulnerabilityScore / 4).toFixed(3);
	dataset.push(vulnerabilityScore);
	var likelihoodScore = (likelihoodScore / 8).toFixed(3);

	var s1 = document.getElementById("threat_score");
	s1.innerHTML = threatAgentScore;
	if (threatAgentScore < 3) {
		s1.className = "";
		s1.classList.add("btn");
		s1.classList.add("brightgreen");
	} else if (threatAgentScore >= 3 && threatAgentScore < 6) {
		s1.className = "";
		s1.classList.add("btn");
		s1.classList.add("brightyellow");
	} else {
		s1.className = "";
		s1.classList.add("btn");
		s1.classList.add("brightred");
	}

	var s2 = document.getElementById("vuln_score");
	s2.innerHTML = vulnerabilityScore;
	if (vulnerabilityScore < 3) {
		s2.className = "";
		s2.classList.add("btn");
		s2.classList.add("brightgreen");
	} else if (vulnerabilityScore >= 3 && vulnerabilityScore < 6) {
		s2.className = "";
		s2.classList.add("btn");
		s2.classList.add("brightyellow");
	} else {
		s2.className = "";
		s2.classList.add("btn");
		s2.classList.add("brightred");
	}

	var score_LS = 0;
	var s3 = document.getElementById("like_score");
	s3.innerHTML = likelihoodScore;
	if (likelihoodScore < 3) {
		s3.className = "";
		s3.classList.add("btn");
		s3.classList.add("green");
		score_LS = 0;
	} else if (likelihoodScore >= 3 && likelihoodScore < 6) {
		s3.className = "";
		s3.classList.add("btn");
		s3.classList.add("yellow");
		score_LS = 1;
	} else {
		s3.className = "";
		s3.classList.add("btn");
		s3.classList.add("red");
		score_LS = 2;
	}

	var technicalImpactScore =
		parseInt(document.getElementById("loc").value) +
		parseInt(document.getElementById("loi").value) +
		parseInt(document.getElementById("loa").value) +
		parseInt(document.getElementById("loacc").value);

	var businessImpactScore =
		parseInt(document.getElementById("finan").value) +
		parseInt(document.getElementById("reput").value) +
		parseInt(document.getElementById("comply").value) +
		parseInt(document.getElementById("privacy").value) +
		0;

	impactScore = technicalImpactScore + businessImpactScore;
	var impactScore = (impactScore / 8).toFixed(3);
	technicalImpactScore = (technicalImpactScore / 4).toFixed(3);
	dataset.push(technicalImpactScore);
	businessImpactScore = (businessImpactScore / 4).toFixed(3);
	dataset.push(businessImpactScore);

	var s4 = document.getElementById("technical_score");
	s4.innerHTML = technicalImpactScore;
	if (technicalImpactScore < 3) {
		s4.className = "";
		s4.classList.add("btn");
		s4.classList.add("brightgreen");
	} else if (technicalImpactScore >= 3 && technicalImpactScore < 6) {
		s4.className = "";
		s4.classList.add("btn");
		s4.classList.add("brightyellow");
	} else {
		s4.className = "";
		s4.classList.add("btn");
		s4.classList.add("brightred");
	}

	var s5 = document.getElementById("business_score");
	s5.innerHTML = businessImpactScore;
	if (businessImpactScore < 3) {
		s5.className = "";
		s5.classList.add("btn");
		s5.classList.add("brightgreen");
	} else if (businessImpactScore >= 3 && businessImpactScore < 6) {
		s5.className = "";
		s5.classList.add("btn");
		s5.classList.add("brightyellow");
	} else {
		s5.className = "";
		s5.classList.add("btn");
		s5.classList.add("brightred");
	}

	var score_IS = 0;
	var s6 = document.getElementById("impact_score");
	s6.innerHTML = impactScore;
	var score_IS = 0;

	if (impactScore < 3) {
		s6.className = "";
		s6.classList.add("btn");
		s6.classList.add("green");
		score_IS = 2;
	} else if (impactScore >= 3 && impactScore < 6) {
		s6.className = "";
		s6.classList.add("btn");
		s6.classList.add("yellow");
		score_IS = 2;
	} else {
		s6.className = "";
		s6.classList.add("btn");
		s6.classList.add("red");
		score_IS = 0;
	}

	var matrix = [
		["Medium", "High", "Critical"],
		["Low", "Medium", "High"],
		["Note", "Low", "Medium"]
	];
	var o_score = document.getElementById("overall_score");
	var final_score = matrix[score_IS][score_LS];
	o_score.innerHTML = final_score;
	o_score.style.color = "black";
	if (final_score == "Note") {
		o_score.style.background = "lightgreen";
	} else if (final_score == "Low") {
		o_score.style.background = "Yellow";
	} else if (final_score == "Medium") {
		o_score.style.background = "Orange";
	} else if (final_score == "High") {
		o_score.style.background = "Red";
	} else {
		o_score.style.background = "Pink";
	}
	updateChart(dataset);
}

function updateChart(dataset) {
	myChart.data.datasets[0].data = dataset;
	myChart.update();
}
