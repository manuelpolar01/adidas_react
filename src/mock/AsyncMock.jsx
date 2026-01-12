export const data=[

    {
       
        name:'nike',
        description :'pantalon',
        size:'M',
        price:20,
        stock:12,
        category:'uomo',
        img:'https://cdn.pixabay.com/photo/2014/07/30/10/53/vogue-405148_640.jpg',
    },
    {
       
        name:'puma',
        description :'pantalon',
        size:'M',
        price:30,
        stock:5,
        category:'uomo',
        img:'https://cdn.pixabay.com/photo/2014/08/05/10/31/waiting-410328_640.jpg',
    },
    {

        name:'fila',
        description :'pantalon',
        size:'M',
        price:35,
        stock:10,
        category:'uomo',
        img:'https://cdn.pixabay.com/photo/2021/09/16/08/54/man-6629579_640.jpg',
    },
    {
      
        name:'reef',
        description :'pantalon',
        size:'M',
        price:50,
        stock:20,
        category:'uomo',
        img:'https://cdn.pixabay.com/photo/2019/07/27/20/27/fashion-4367463_640.jpg',
    },
      {
        
        name:'levis',
        description :'pantalon',
        size:'M',
        price:30,
        stock:10,
        category:'donne',
        img:'https://pixabay.com/es/images/download/x-5005901_1920.jpg',
    },
    {
        
        name:'caca',
        description :'pantalon',
        size:'M',
        price:20,
        stock:12,
        category:'donne',
        img:'https://pixabay.com/it/photos/ustrasana-cammello-yoga-madrid-2679482/'
    },
    {
       
        name:'puma',
        description :'pantalon',
        size:'M',
        price:30,
        stock:5,
        category:'donne',
        img:'https://cdn.pixabay.com/photo/2014/08/05/10/31/waiting-410328_640.jpg',
    },
    {
       
        name:'fila',
        description :'pantalon',
        size:'M',
        price:35,
        stock:10,
        category:'donne',
        img:'https://cdn.pixabay.com/photo/2021/09/16/08/54/man-6629579_640.jpg',
    },
    {
        
        name:'reef',
        description :'pantalon',
        size:'M',
        price:50,
        stock:20,
        category:'donne',
        img:'https://cdn.pixabay.com/photo/2019/07/27/20/27/fashion-4367463_640.jpg',
    }
]

//crear y exportar una promesa

export const getProducts=()=>{
    let error= false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!error){
                resolve(data)
            }
            else{
                reject('intente mas tarde')
            }
        }, 3000);
    })
}

//crear una que devuelva  item

export const getItem=(id)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            let product =data.find((item)=>item.id===id)
            resolve(product)
        },2000);
    })
}