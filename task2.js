

var ctx = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['subject_a',
        'subject_b',
        'subject_c',
        'subject_d'],
        datasets: [{
            label:'Performance',
            data: [56, 75, 69, 86,],
            backgroundColor: [
                'red',
                'blue',
                'black',
                'Purple'
            ]
        }]
    },
    options: {
        title:{
            text:'jiiii',
            display:true
        },
        legend:
        {
            display:false
        }
        
    }
});

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['subject_a',
        'subject_b',
        'subject_c',
        'subject_d'],
        datasets: [{
            label:'Performance',
            data: [65, 72, 86, 79,],
            backgroundColor: [
                'red',
                'blue',
                'black',
                'Purple'
            ]
        }]
    },
    options: {
        title:{
            text:'jiiii',
            display:true
        },
        legend:
        {
            display:false
        }
        
    }
});

var ctx = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['subject_a',
        'subject_b',
        'subject_c',
        'subject_d'],
        datasets: [{
            label:'Performance',
            data: [90, 75, 85, 80,],
            backgroundColor: [
                'red',
                'blue',
                'black',
                'Purple'
            ]
        }]
    },
    
        
});


// const labels = [
    
//   ];
//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   };