import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('ciudad')
export class Ciudad {
    @PrimaryColumn()
    private idCiudad: number;
    @Column()
    private nombreCiudad: string;

    constructor(id: number, nombre : string){
        this.idCiudad = id;
        this.nombreCiudad = nombre;
    }

    public getIdCiudad(): number { return this.idCiudad; }
    public setIdCiudad(idCiudad: number): void { this.idCiudad = idCiudad; }
    public getNombre(): string { return this.nombreCiudad; }
    public setNombre(nombre: string): void { this.nombreCiudad = nombre; 
}
}
