export class ClienteModel {
    constructor(
        public id : number,
        public nombre: string,
        public apellido: string,
        public dpi: string,
        public fechaNacimiento: String,
        public direccion: string,
        public telefono: string,
        public correoElectronico: string,
        public estado: boolean
    ){}
    
}
