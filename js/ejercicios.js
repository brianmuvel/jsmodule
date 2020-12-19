let obj = {
    name: 'brian',
    lastname: 'munoz',
    age: 29,
    getFullName: function(){
        return this.name + ' ' + this.lastname
    },
    saltar: function(){
        return `${this.name} esta saltando`
    }
}
obj.getFullName()
obj.saltar()

let koder = {
    name: 'Brian',
    lastname: 'Munoz',
    generation: 1,
    bootcamp: 'Python',
    getFullName: function(){
        return this.generation+ ' '+ this.name + ' ' + this.lastname
    },
    clases: [{
        calif: 10,
        calif: 9,
        calif: 8}],
    get promedio(){
        let clase = this.clases
        let total = clase.reduce((acc, cv)=>{
            return acc + cv.calif
        },0)
        return total / clase.length
    },
    faltas: [{
        dia1: false,
        dia2: true,
        dia3: false,
    }],
    get porcentajeFaltas(){
        let ausente = this.faltas
        return ausente.filter(Boolean)? console.log('CON FATAS'): console.log('SIN FALTAS')
    },
    set nbootcamp (newBootcamp){
        this.bootcamp = newBootcamp
    }
}
//si ya existe remplaza la propiedad
//setProperty: function(newProp, valueProp){
 //   this[nameProp] = valueProp
//}
koder.promedio
koder.getFullName()
koder.porcentajeFaltas
koder.nbootcamp = 'JS'

//forma nueva para tener get
//get fullname(){
    //lo que sea
//}
//koder.fullname

//set nueva forma 
/* set property (nameProperty, value){
    this[nameProperty] = value
} */