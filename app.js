let greet = require('./greet');

greet();

let persona = {
    nombre: "Omar",
    apellido: "Ballesteros",
    getName: function() {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima",
        getAddress: function() {
            return `Calle: ${this.calle} Colonia: ${this.colonia} CP: ${this.cp}, ${this.municipio}`
        }
    }
}

/*console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.getName());
console.log(persona.domicilio);
*/

console.log(persona.domicilio.getAddress())