// let labels1=['StudentA_sub_a','StudentB_sub_a','StudentC_sub_a','StudentD_sub_a','StudentA_sub_C','StudentB_sub_C','StudentC_sub_C','StudentD_sub_C','StudentA_sub_B','StudentB_sub_B','StudentC_sub_B','StudentD_sub_B'];
// let colors1=['#49A9EA', '#36CAAB','red','black','yellow','green','blue','purple',];

let labels1=["StudentA_sub_A","StudentB_sub_A","StudentC_sub_A","StudentD_sub_A",
'StudentA_sub_B','StudentB_sub_B','StudentC_sub_B','StudentD_sub_B',
'StudentA_sub_C','StudentB_sub_C','Studentc_sub_C','StudentD_sub_C',
'StudentA_sub_D','StudentB_sub_D','Studentc_sub_D','StudentD_sub_D'];
let totatSubResults=[201,247,217,205,
225,203,210,170,
230,245,211,199,
235,250,201,226];
let colors1=['red','red','red','red',
'blue','blue','blue','blue',
'yellow','yellow','yellow','yellow',
'purple','purple','purple','purple'];

let data1=[56,72,77,63,69,90,56,59,75,63,70,45];
let mychart1=document.getElementById("comparision1").getContext('2d');
let chart1= new Chart(mychart1,{
    type:'pie',
    data: {
        labels:labels1,
        datasets:[ {
            data:totatSubResults,
            backgroundColor:colors1
        }]
    },
    options:{
        title:{
            text:'do you lik',
            display:true
        },
        
    }
});
// total result comparision

let labels2=["StudentA","StudentB","StudentC","StudentD"];
let totalResult=[891,945,839,800];
let colors2=['red','purple','green','black'];


let mychart2=document.getElementById("comparision2").getContext('2d');
let chart2= new Chart(mychart2,{
    type:'pie',
    data: {
        labels:labels2,
        datasets:[ {
            data:totalResult,
            backgroundColor:colors2
        }]
    },
    options:{
        title:{
            text:'do you lik',
            display:true
        },
        
    }
});


// let labels2=['StudentA_sub_C','StudentB_sub_C','StudentC_sub_C','StudentD_sub_C'];
// let colors2=['#49A9EA', '#36CAAB','red','black'];

// let data2=[56,72,77,63];
// let mychart2=document.getElementById("comparision3").getContext('2d');
// let chart2= new Chart(mychart2,{
//     type:'pie',
//     data: {
//         labels:labels2,
//         datasets:[ {
//             data:data2,
//             backgroundColor:colors2
//         }]
//     },
//     options:{
//         title:{
//             text:'do you lik',
//             display:true
//         },
        
//     }
// });


//comparision in January Subject-B


// let labels3=['StudentA_sub_B','StudentB_sub_B','StudentC_sub_B','StudentD_sub_B'];
// let colors3=['#49A9EA', '#36CAAB','red','black'];

// let data3=[56,72,77,63];
// let mychart3=document.getElementById("comparision2").getContext('2d');
// let chart3= new Chart(mychart3,{
//     type:'pie',
//     data: {
//         labels:labels1,
//         datasets:[ {
//             data:data3,
//             backgroundColor:colors3
//         }]
//     },
//     options:{
//         title:{
//             text:'do you lik',
//             display:true
//         },
        
//     }
// });


// let labels4=['StudentA_sub_D','StudentB_sub_D','StudentC_sub_D','StudentD_sub_D'];
// let colors4=['#49A9EA', '#36CAAB','red','black'];

// let data4=[56,72,77,63];
// let mychart4=document.getElementById("comparision1").getContext('2d');
// let chart4= new Chart(mychart4,{
//     type:'pie',
//     data: {
//         labels:labels4,
//         datasets:[ {
//             data:data4,
//             backgroundColor:colors1
//         }]
//     },
//     options:{
//         title:{
//             text:'do you lik',
//             display:true
//         },
        
//     }
// });