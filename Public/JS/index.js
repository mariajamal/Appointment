
var date = new Date(),
d = date.getDate(),
m = date.getMonth(),
y = date.getFullYear();

const disDate = document.getElementById('date')
const appmorTime = document.getElementById('mor')
const appaftTime = document.getElementById('aft')
const appeveTime = document.getElementById('eve')
const button = document.getElementById('button')
const table = document.getElementById('table')
const button1 = document.getElementById('button1')
var appoint = []


function formSub(){
    button.style.display = "none";
    button1.style.display = "block";
    table.style.display = "block";
    for(i=0; i < 7; i++){
        var curdate = new Date(y, m, d+i)
        var node = document.createElement("li");
        node.id = curdate.toDateString()
        var textnode = document.createTextNode(curdate.toDateString());
        node.appendChild(textnode);
        disDate.appendChild(node);
        
         }
         
         
          var  morning = ["10:00 AM","10:30 AM","11:00 AM","11:30 AM"]
          var afternoon = ["12:00 PM","12:30 PM","01:00 PM","01:30 PM"]
          var  evening = ["04:00 PM","04:30 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","08:00 PM"];
       
    document.getElementById("date").addEventListener("click", function(event) {
        if(appoint.length >= 0){
            appoint.splice(0,appoint.length,event.target.id)

            console.log(appoint)
            let sty = event.target.id
            // document.getElementById(node).classList.remove("trial")
            
            document.getElementById(sty).className = "trial"
        }else{
            appoint.push(event.target.id);
            let sty = event.target.id
            document.getElementById(sty).className = "trial"
            console.log(appoint)
        }
        
        });
        
    function display(){
       
        for(i=0; i<morning.length; i++){
            var morTime = morning[i]
            var mornode = document.createElement("span");
            mornode.id = morTime
            var textnode = document.createTextNode(morTime);
            mornode.appendChild(textnode);
            appmorTime.appendChild(mornode).className = "padding";
        }
        for(i=0; i<afternoon.length; i++){
            var aftTime = afternoon[i]
            var aftnode = document.createElement("span");
            aftnode.id = aftTime
            var textnode = document.createTextNode(aftTime);
            aftnode.appendChild(textnode);
            appaftTime.appendChild(aftnode).className = "padding";
      
        }
        for(i=0; i<evening.length; i++){
            var eveTime = evening[i]
            var evenode = document.createElement("span");
            evenode.id = eveTime
            var textnode = document.createTextNode(eveTime);
            evenode.appendChild(textnode);
            appeveTime.appendChild(evenode).className = "padding";
           
        }
        document.getElementById("mor").addEventListener("click", function(event) {
            if(appoint.length>=1){
                appoint.splice(1,1,event.target.id)
                console.log(appoint)
                let sty = event.target.id
                document.getElementById(sty).className = "trial"
            }else if(appoint.length == 0){
                alert("Please select a date before chooosing the time.")
            }else{
                appoint.push(event.target.id);
                let sty = event.target.id
                document.getElementById(sty).className = "trial"
                console.log(appoint)
            }
            });
         document.getElementById("aft").addEventListener("click", function(event) {
            if(appoint.length>=1){
                appoint.splice(1,1,event.target.id)
                let sty = event.target.id
                document.getElementById(sty).className = "trial"
                console.log(appoint)
            }else if(appoint.length == 0){
                alert("Please select a date before chooosing the time.")
            }else{
                appoint.push(event.target.id);
                let sty = event.target.id
                document.getElementById(sty).className = "trial"
                console.log(appoint)
            }
            });
         document.getElementById("eve").addEventListener("click", function(event) {
            if(appoint.length>=1){
                appoint.splice(1,1,event.target.id)
                let sty = event.target.id
                document.getElementById(sty).className = "trial"
                console.log(appoint)
            }else if(appoint.length == 0){
                alert("Please select a date before chooosing the time.")
            }else{
                appoint.push(event.target.id);
                let sty = event.target.id
                document.getElementById(sty).className = "trial"
                console.log(appoint)
            }
            });
     }
     display();
}
function formSub1(){
    if(appoint.length==2){
        alert("Your appointment for "+ appoint[0] +","+ appoint[1] +" is booked.")
    }else{
        alert("Please choose date and time to continue.")
    }
    
}


 