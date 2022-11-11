function achieveNirvana() {
    console.log('You are enlidhtened');
}

function c() {
    setTimeout(achieveNirvana,3000)
}

function b() {
    c();
}

function a() {
    b()
}

a()