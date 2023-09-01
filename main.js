let currentUser;
let exit;
let sale;

const chart = []

// CLASES 


class User {
    constructor(user, password) {
        this.userName = user;
        this.pass = password;
    }
}

class product {
    constructor(id, model, size, price) {
        this.id = id;
        this.model = model;
        this.size = size;
        this.price = price;
    }
}

// PRODUCTOS

const airJ = new product(1, "Air Jordan", "20x10x25cm", "$18000")
const dunkL = new product(2, "Dunk Low", "18x12x23cm", "$16000")
const airJ4 = new product(3, "Air Jordan 4", "22x12x25cm", "$15000")

const productArray = [airJ, dunkL, airJ4]

let productList = "Los productos disponibles son:\n\n"

productArray.map((el) => {
    (productList +=
        `
            Id: ${el.id}
            Modelo: ${el.model}
            Precio: ${el.price}
            Tamaño: ${el.size}
                
        `
    )
    "\n\n"
});

// FUNCIONES

function register() {
    const name = prompt("Ingrese un nombre de usuario.")
    let password = prompt("Ingrese una contraseña. La misma deberá contener un mínimo de 5 carácteres, y respetará mayúsculas.")
    while (password.length < 5) {
        password = prompt("Su contraseña debe contener al menos 5 carácteres.")
    }
    let passwordCheck = prompt("Vuelva a ingresar su contraseña por favor.");
    while (passwordCheck !== password) {
        passwordCheck = prompt("La segunda contraseña ingresada no coincide con su contraseña inicial, por favor, vuelva a intentarlo.\n\nIngrese 0 para modificar su contraseña inicial.");

        if (passwordCheck === "0") {
            password = prompt("Ingrese nuevamente una contraseña inicial.");
            while (password.length < 5) {
                password = prompt("Su contraseña debe contener al menos 5 caracteres.");
            }
            passwordCheck = prompt("Vuelva a ingresar su contraseña por favor.");
        }
    }
    alert("Registro realizado con éxito.")

    const user = new User(name, password);
    currentUser = user;
}

function introAndRegister() {
    let option = parseInt(prompt("Bienvenido a Sneaker Print\n\nPara poder ver los productos y navegar en el sitio, necesita estar registrado.\n\nPor favor, ingrese una de las siguientes opciones:\n\n1. Registrarme\n2. Salir"))
    if (option == 1) {
        register()
    } else if (option == 2) {
        bye()
    } else {
        while (option !== 2 && option !== 1) {
            option = parseInt(prompt("Opción no disponible. Si desea navegar en la página necesita estar registrado\n\nPor favor, ingrese una de las siguientes opciones:\n\n1. Registrarme\n2. Salir"))
            if (option == 2) {
                bye()
            } else if (option == 1) {
                register()
            }
        }
    }
}

function login() {
    let option = parseInt(prompt("Para poder ver los productos y navegar en el sitio, necesita iniciar sesión.\n\nPor favor, ingrese una de las siguientes opciones:\n\n1. Iniciar sesión\n2. Salir"))
    if (option == 1) {
        userName = prompt("Ingrese su nombre de usuario.")
        password = prompt("Ingrese su contraseña.")
        while (userName !== currentUser.userName || password !== currentUser.pass) {
            alert("Credenciales inválidas. Vuelva a intentarlo.")
            userName = prompt("Ingrese su nombre de usuario.")
            password = prompt("Ingrese su contraseña.")
        }
    } else if (option == 2) {
        bye(0)
    }
}

function menu() {
    let navegation;
    while (navegation !== 0 && sale !== 0) {
        navegation = parseInt(prompt(`Bienvenido al menú principal.

    Por favor, navegue según las opciones:

    1. Ver productos disponibles.
    2. Ver mi carrito.
    0. Salir.

    `))
        switch (navegation) {
            case 1:
                chartAdd()
                break;
            case 2:
                chartView()
                break;
            case 0:
                bye()
                break;
            default:
                alert("Opción no válida.")
                break;
        }
    }
}

function chartAdd() {
    let productAdd;
    while (productAdd !== 9) {
        productAdd = parseInt(prompt(productList + "\n\nPara agregar un producto al carrito, ingrese el número de ID correspondiente.\n\nPara volver al menú principal, ingrese 9."))
        switch (productAdd) {
            case 1:
                chart.push(airJ)
                alert(airJ.model + " agregado correctamente.")
                break;
            case 2:
                chart.push(dunkL)
                alert(dunkL.model + " agregado correctamente.")
                break;
            case 3:
                chart.push(airJ4)
                alert(airJ4.model + " agregado correctamente.")
                break;
            case 9:
                break;
            default:
                alert("Opción no válida.")
                break;
        }
    }
}

function chartView() {
    if (chart.length == 0) {
        alert("Su carrito está vacío.\n\nSiga las instrucciones del menú principal para cargarlo con productos.")
    } else {
        do {
            sale = parseInt(prompt("Su carrito contiene los siguientes items:" + chartContent() + "\n\nPara eliminar un elemento de su carrito, ingrese el número de ID del producto a eliminar.\n\n9. Para volver al menú principal.\n0. Para pagar."))
            switch (sale) {
                case 1:
                    chartSplice(sale)
                    break;
                case 2:
                    chartSplice(sale)
                    break;
                case 3:
                    chartSplice(sale)
                    break;
                case 4:
                    chartSplice(sale)
                    break;
                case 5:
                    chartSplice(sale)
                    break;
                case 6:
                    chartSplice(sale)
                    break;
                case 7:
                    chartSplice(sale)
                    break;
                case 8:
                    chartSplice(sale)
                    break;
                case 9:
                    break;
                case 0:
                    alert("Gracias por su compra. Vuelvas prontos.")
                    break;
            }
        } while (sale !== 0 && sale !== 9)
    }
}

function chartContent(){
    return chart.map((el, index) => [`
    
        ID: ${index + 1}
        Modelo: ${el.model}
        Precio: ${el.price}
        `]).join("")
}

function chartSplice(id){
    chart.splice(id - 1, 1);
}

function bye(prop) {
    if (prop == 0) {
        alert("Gracias por visitar Sneaker Print, te esperamos la próxima")
    } else if (currentUser !== undefined) {
        alert("Nos vemos " + currentUser.userName + ". Gracias por visitar Sneaker Print")
    } else {
        alert("Gracias por visitar Sneaker Print, te esperamos la próxima")
    }

    exit = 1;
}


//EJECUCIÓN




introAndRegister();
if(exit !== 1){
    login()
    menu()
} 


