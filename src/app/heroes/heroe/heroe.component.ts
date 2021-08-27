import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponet{
nombre:  string = "Iroman";
edad:  number = 45;
get nombreCapitalizado(){
    return this.nombre.toUpperCase();
}

menu = [
    {
      'type': 'menu', 
      'title': 'Games',
      'code': '-1',
      'visibleFor': "1,2,3,4",
      'icon': "icon-angle-right" 
    },
    {
        'type': 'submenu', 
        'title': 'Game transactions',
        'code': '101',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },
      {
        'type': 'submenu', 
        'title': 'Search Game',
        'code': '110',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },  
      {
        'type': 'submenu', 
        'title': 'Search Transactions',
        'code': '113',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      }, 

      {
        'type': 'menu', 
        'title': 'Financial',
        'code': '-1',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },
      {
        'type': 'submenu', 
        'title': 'Financial by Families',
        'code': '104',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },   
      {
        'type': 'submenu', 
        'title': 'Financial by Casino',
        'code': '120',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      }, 
      {
        'type': 'submenu', 
        'title': 'Financial by Provider',
        'code': '125',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },   
      {
        'type': 'submenu', 
        'title': 'Financial by Players',
        'code': '130',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },   
      {
        'type': 'submenu', 
        'title': 'Financial by Office',
        'code': '132',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },   
      {
        'type': 'submenu', 
        'title': 'Adjustment',
        'code': '135',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },    
      {
        'type': 'menu', 
        'title': 'Statistics',
        'code': '-1',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },    
      {
        'type': 'submenu', 
        'title': 'Favorite games',
        'code': '150',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },   
      {
        'type': 'menu', 
        'title': 'Players',
        'code': '-1',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },
      {
        'type': 'submenu', 
        'title': 'Online Users',
        'code': '200',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },    
      {
        'type': 'submenu', 
        'title': 'Search players',
        'code': '201',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },
      {
        'type': 'menu', 
        'title': 'Admin',
        'code': '-1',
        'visibleFor': "3,4",
        'icon': "icon-angle-right" 
      },    
      {
        'type': 'submenu', 
        'title': 'Admin Users',
        'code': '390',
        'visibleFor': "3,4",
        'icon': "icon-angle-right" 
      },   
      {
        'type': 'submenu', 
        'title': 'Performance monitor',
        'code': '400',
        'visibleFor': "3,4",
        'icon': "icon-angle-right" 
      }, 
      {
        'type': 'submenu', 
        'title': 'Report manager',
        'code': '410',
        'visibleFor': "3,4",
        'icon': "icon-angle-right" 
      },    
      {
        'type': 'submenu', 
        'title': 'Games',
        'code': '415',
        'visibleFor': "3,4",
        'icon': "icon-angle-right" 
      },   
      {
        'type': 'menu', 
        'title': 'Lobby Manager',
        'code': '-1',
        'visibleFor': "1,2,3,4",
        'icon': "icon-angle-right" 
      },
      {
        'type': 'submenu', 
        'title': 'Books',
        'code': '320',
        'visibleFor': "2,3,4",
        'icon': "icon-angle-right" 
      }, 
      {
        'type': 'submenu', 
        'title': 'Icons',
        'code': '330',
        'visibleFor': "2,3,4",
        'icon': "icon-angle-right" 
      },   
      {
        'type': 'submenu', 
        'title': 'Websites',
        'code': '300',
        'visibleFor': "2,3,4",
        'icon': "icon-angle-right" 
      }, 
      {
        'type': 'submenu', 
        'title': 'Systems',
        'code': '305',
        'visibleFor': "2,3,4",
        'icon': "icon-angle-right" 
      },   
      {
        'type': 'submenu', 
        'title': 'Categories',
        'code': '360',
        'visibleFor': "2,3,4",
        'icon': "icon-angle-right" 
      },  
      {
        'type': 'submenu', 
        'title': 'Bonus',
        'code': '570',
        'visibleFor': "2,3,4",
        'icon': "icon-angle-right" 
      }, 
      {
        'type': 'submenu', 
        'title': 'Game tags',
        'code': '576',
        'visibleFor': "2,3,4",
        'icon': "icon-angle-right" 
      },  
      {
        'type': 'submenu', 
        'title': 'Banners',
        'code': '581',
        'visibleFor': "2,3,4",
        'icon': "icon-angle-right" 
      },                                                                                               
]


obtenerNombre(): string{
    return ` ${this.nombre} - ${this.edad};
    `
}


cambiarNombre():void{
     this.nombre ="Spiderman"
}

recorrerMenu():void{
    for (var clave in this.menu){
        // Controlando que json realmente tenga esa propiedad
        if (this.menu.hasOwnProperty(clave)) {
          
          console.log("La clave es " + clave+ " y el nombre es " +this.menu[clave].title);
        }
      }
}



cambiarEdad():void{
    this.edad =Math.floor(Math.random() * (40 + 1));
}
}