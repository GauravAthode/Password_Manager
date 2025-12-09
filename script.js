function AddData(){
    const site=document.getElementById("siteName").value.trim();
    const username=document.getElementById("username").value.trim();
    const password=document.getElementById("password").value.trim();


    const DataPacket={
        webSite:site,
        username:username,
        password:password
    };

   
        

    console.log(DataPacket);



    const data= JSON.parse(localStorage.getItem("PasswordManager"))||[];

    
    localStorage.setItem("PasswordManager",JSON.stringify(DataPacket));


    document.getElementById("siteName").value="";
    document.getElementById("username").value="";
    document.getElementById("password").value="";   



}


function downloadFile(){
    const data= JSON.parse(localStorage.getItem("PasswordManager"))||[];

    if(data.length<=0){
        alert("No data to found");
        return;
    }

    const headers=Object.keys(data[0]).join(",")+"\n";

    const rows=data.map((item)=> Object.values(item).join(",")).join("\n");

    const csvContent=headers+rows;
    const blob=new Blob([csvContent],{type:"text/csv"});

    const anchorTag=document.createElement("a");
    
    anchorTag.href=URL.createObjectURL(blob);
    anchorTag.download="data.csv";
    document.body.appendChild(anchorTag);
    anchorTag.click();
    document.body.removeChild(anchorTag);

}