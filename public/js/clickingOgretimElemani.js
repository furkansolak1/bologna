 
document.getElementById('assign1').addEventListener('click', function() {
    
    var yElements = document.querySelectorAll('.showline');
    yElements.forEach(function(element) {
        if (!element.classList.contains('gosterme')) {
            element.classList.add("gosterme")
        }
        
    });

    
    var xElement = document.getElementById('dersicerigiolustur');
    xElement.classList.remove('gosterme');
});
document.getElementById('assign2').addEventListener('click', function() {
    
    var yElements = document.querySelectorAll('.showline');
    yElements.forEach(function(element) {
        if (!element.classList.contains('gosterme')) {
            element.classList.add("gosterme")
        }
        
    });

    
    var xElement = document.getElementById('kaynakkitapolustur');
    xElement.classList.remove('gosterme');
});
document.getElementById('assign3').addEventListener('click', function() {
    
    var yElements = document.querySelectorAll('.showline');
    yElements.forEach(function(element) {
        if (!element.classList.contains('gosterme')) {
            element.classList.add("gosterme")
        }
        
    });

    
    var xElement = document.getElementById('onkosulolustur');
    xElement.classList.remove('gosterme');
});
document.getElementById('assign4').addEventListener('click', function() {
    
    var yElements = document.querySelectorAll('.showline');
    yElements.forEach(function(element) {
        if (!element.classList.contains('gosterme')) {
            element.classList.add("gosterme")
        }
        
    });

    
    var xElement = document.getElementById('ogrenimciktisiolustur');
    xElement.classList.remove('gosterme');
});
// window.addEventListener("load", function() {
        
//     drawChart();
//     });
//         console.log("<%= dataset.date %>");

//         function drawChart() {
//             // Örnek veri
        
//             var ctx = document.getElementById(`myChart`).getContext('2d');
//             var myChart = new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: "<%= dataset.date %>".split(","),
//                     datasets: [{
//                         label: "<%= dataset.labels[0] %>",
//                         data: "<%- dataset.kilo %>".split(","),
//                         borderColor: 'rgb(75, 192, 192)',
//                         tension: 0.1
//                     }]
//                 },
//                 options: {
//                     scales: {
//                         y: {
//                             beginAtZero: false
                            
                            
//                         }
//                     }
//                 }
// });}