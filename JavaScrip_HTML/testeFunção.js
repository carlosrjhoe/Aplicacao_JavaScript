function primeiro(){
    console.log("1-antes");
    segunda();
    console.log("1-depois");
}

function segunda(){
    console.log("2-antes");
    terceira();
    console.log("2-depois");
}

function terceira(){
    console.log("3");
}

primeiro();
segunda();
terceira();