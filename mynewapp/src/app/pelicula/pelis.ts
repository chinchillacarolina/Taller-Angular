export class Pelicula {
    
        id: number;
        name: string;
        channel: string;
        seasons: number;
        resumen: string;
        disponible: string;
        imagen: string;
      
        constructor(id:number, name: string, channel: string, seasons: number, resumen: string, disponible: string,imagen: string) {
          this.name = name;
          this.channel = channel ;
          this.id = id;
          this.resumen = resumen ;
          this.disponible = disponible ;
          this.imagen = imagen ;
          this.seasons = seasons;
          
        
      }
   }