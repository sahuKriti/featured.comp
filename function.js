function changeRes() {
    console.log("300");
    if(screen.width < 660){
        console.log("40");
        document.querySelector('.disRes').style.border="0px";
        document.querySelector('.marRes').style.borderBottom =" 2px solid red";
        document.querySelector('.maxWidth').style.display="none";
        document.querySelector('.block').style.display="block";
        document.querySelector('.vanish2').style.display="none";
        document.querySelector('.marRes').style.right="30px";
        // document.querySelector('.masRes').style.backgroundColor="rgb(1, 1, 58)";
        // document.querySelector('.disRes').style.backgroundColor="rgb(4, 4, 92)";



    }
}

function changeDiscussion() {
    console.log("700");
    if(screen.width < 660){
        console.log("80");
        document.querySelector('.marRes').style.border="0px";
        document.querySelector('.disRes').style.borderBottom =" 2px solid red";
        document.querySelector('.block').style.display="none";
        document.querySelector('.maxWidth').style.display="block";
        document.querySelector('.marRes').style.right="221px";
        // document.querySelector('.masRes').style.backgroundColor="rgb(4, 4, 92)";
        // document.querySelector('.disRes').style.backgroundColor="rgb(1, 1, 58)";



    }
}



function change() {
    console.log("200");
    if (screen.width > 960) {

        console.log("10");
        if (document.querySelector('.side1').style.display == "none") {
            console.log("2");
            document.querySelector('.side1').style.display = "block";
            document.querySelector('.vanish2').style.display = "none";
        } else {
            console.log("5");
            document.querySelector('.side1').style.display = "none";
            document.querySelector('.vanish2').style.display = "block";
        }

    } else{
        console.log("500");
        if (document.querySelector('.side1').style.display == "none") {
            console.log("14");
            document.querySelector('.infoList').classList.toggle("infoListAdd");
            document.querySelector('.side1').style.display="block";
            // document.querySelector('.side1').style.display = "block";

        } else {
            console.log("18");
            document.querySelector('.infoList').classList.toggle("infoListAdd");
            document.querySelector('.side1').style.display="none";;

            // document.querySelector('.side1').style.display == "none";
            

        }


        


    }
}




