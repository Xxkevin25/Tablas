function TABS() {

    var num = prompt('Numero a multiplicar');
    var limit = prompt('Limite');
    document.write('Tabla de multiplicar del ' + num + '<br>')
    for(var z = 1; z <= limit; z++){
       var result = z*parseInt(num)
        document.write(z + ' x ' + num + ' = ' + result + '<br>')
    }

    /*let tab = parseInt(prompt("ESCRIBE EL NUMERO DE LA TABLA :D"));
    switch (tab) {
        case 2:
            let z = 0;
            let k = 0;
            for (; k <= 24; k += 2) {
                document.write('<p style="color: coral;">' + (z++) + 'x 2 =' + k + '<br>' + '</p>');
            }
            break;
        case 3:
            let a = 0;
            let b = 0;
            for (; a <= 36; a += 3) {
                document.write('<p style="color: darkred;">' + (b++) + 'x 3 =' + a + '<br>' + '</p>');
            }
            break;
        case 4:
            let q = 0;
            let p = 0;
            for (; q <= 48; q += 4) {
                document.write('<p style="color: maroon;">' + (p++) + 'x 4 =' + q + '<br>' + '</p>');
            }
            break;
        case 5:
            let w = 0;
            let o = 0;
            for (; w <= 60; w += 5) {
                document.write('<p style="color: peru;">' + (o++) + 'x 5 =' + w + '<br>' + '</p>');
            }
            break;
        case 6:
            let d = 0;
            let l = 0;
            for (; d <= 72; d += 6) {
                document.write('<p style="color: magenta;">' + (l++) + 'x 6 =' + d + '<br>' + '</p>');
            }
            break;
        case 7:
            let hs = 0;
            let sh = 0;
            for (; hs <= 84; hs += 7) {
                document.write('<p style="color: tomato;">' + (sh++) + 'x 7 =' + hs + '<br>' + '</p>');
            }
            break;
        case 8:
            let aa = 0;
            let bb = 0;
            for (; aa <= 96; aa += 8) {
                document.write('<p style="color: lime;">' + (bb++) + 'x 8 =' + aa + '<br>' + '</p>');
            }
            break;
        case 9:
            let zz = 0;
            let kk = 0;
            for (; kk <= 108; kk += 9) {
                document.write('<p style="color: purple;">' + (zz++) + 'x 9 =' + kk + '<br>' + '</p>');
            }
            break;
        case 10:
            let zx = 0;
            let kx = 0;
            for (; kx <= 120; kx += 10) {
                document.write('<p style="color: blue;">' + (zx++) + 'x 10 =' + kx + '<br>' + '</p>');
            }
            break;
        case 11:
            let zq = 0;
            let kq = 0;
            for (; kq <= 132; kq += 11) {
                document.write('<p style="color: green;">' + (zq++) + 'x 11 =' + kq + '<br>' + '</p>');
            }
            break;
        case 12:
            let zw = 0;
            let kw = 0;
            for (; kw <= 144; kw += 12) {
                document.write('<p style="color: orange;">' + (zw++) + 'x 12 =' + kw + '<br>' + '</p>');
            }
            break;

        default:
            document.write('<h1 style="color: red;"><u>Not found</u></h1>');
    }*/
}