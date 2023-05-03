const x_0 = 0;
// const x_0 = 0;
const y_0 = 4;
// const y_0 = -15/8;
const x_f = 1;
// const x_f = -1;

const n = 4;

//  Se declara h que es el paso
const h = (x_f - x_0) / n;

const main = () => {
    //  Se declara x_in que es el valor de x en la posición n, empieza en 0
    let x_in = x_0; // x_1
    //  Se declara y_in que es el valor de y en la posición n, empieza en 0
    let y_in = y_0; // y_0

    for (let posicion = 1; posicion < (n + 1); posicion++) {
        // Aquí se escribe lo que se mostrará en consola
        // Resultados de x_n
        console.log("x_" + posicion + " = x_" + (posicion - 1) + " + h = " + x_in + " + " + h + " = " + (x_in + h));
        // Resultados de y_n
        console.log("y_" + posicion + " = y_" + (posicion - 1) + " + h * [f(x_" + (posicion - 1) + ", y_" + (posicion - 1) + ")] = " + y_in + " + " + h + " * [f(" + x_in + "," + y_in + ")] = " + y_in + " + " + h + " * (" +
            (x_in + y_in) // FUNCION 1
            // (5*(Math.pow(x_in,3)) - 2*y_in) // FUNCION 2
                            + ") = " + ( y_in + h*
            (x_in + y_in) // FUNCION 1
            // (5*(Math.pow(x_in,3)) - 2*y_in) // FUNCION 2
                            ));

        console.log("\n");
        // Calcular y_n
        y_in = (y_in + (h*
            (x_in + y_in) // FUNCION 1
            // (5*(Math.pow(x_in,3)) - 2*y_in) // FUNCION 2
        ));
        // Calcular x_n
        x_in = x_in + h;
    }
    console.log("f(" + x_in + ") es aproximadamente " + y_in);
}

main();
// Math.pow(base,exponente);
// console.log();