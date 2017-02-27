<script type="text/javascript">

document.getElementById("mybtn").onclick=function()
{document.getElementById("text").innerHTML ="Hi My Name Is Priscia!";
    
 document.getElementById("secondbtn").innerHTML ="I Think " + document.getElementById("secondpar").innerHTML + "Awesome";
    
}
    
//This is the First button making the yellow circle turn red using Javascript in addition this was not a svg circle code//
    
document.getElementById("mybbtn").onclick=function(){
    document.getElementById("yellowbtn").style.backgroundColor="red";
    }
    
// This is the second button2 changing word color to Blue using Javascript//
    
function myfunction(){
    document.getElementById("para").style.color ="blue"
}
      
//This is the Third button3 making the green button dissapear using Javascript in addition the circle is a svg circle//
    
function mefunction(){
    document.getElementById("circle3").style.visibility="hidden";
    alert("Green Button Will Dissapear after you click Ok!")
                }
    
    document.getElementById("checkguess").onclick= function(){
        var randomNumber=Math.random();
        randomNumbe = randomNumber * 6;
        randomNumber = Math.floor(randomNumber);
        if(document.getElementById("guess").value==randomNumber){
            alert("well done! You got it");
        } else{
            alert("nope! The number was"+ randomNumber);
        }
    }
