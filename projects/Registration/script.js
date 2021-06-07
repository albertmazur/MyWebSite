
function Check(){
    var rexp= new RegExp("[^A-Za-z]");
    var ckbList=document.getElementsByTagName('input');
    for(c=0;c<ckbList.length;c++){
        if(ckbList[c].type=="checkbox"){
            (ckbList[c].checked) ? ckbList[c].style.outline="2px solid green":
                                    ckbList[c].style.outline="2px solid red";
        }
        if(ckbList[c].type=="text"){
            var  wartosc=ckbList[c].value;
            var value=!rexp.test(wartosc);
            (value && wartosc.length>2) ? ckbList[c].style.border="2px solid green":
                                    ckbList[c].style.border="2px solid red";
        }
    }
}
var btn= document.getElementById('button');
    btn.addEventListener('click', Check);
