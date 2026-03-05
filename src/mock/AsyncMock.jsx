export const data=[

    {
        id:"01",
        name:'nike',
        description :'pantalon',
        size:'M',
        price:20,
        stock:12,
        category:'uomo',
        img:'https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg',
    },
    {
        id:'02',
        name:'puma',
        description :'pantalon',
        size:'M',
        price:30,
        stock:5,
        category:'uomo',
        img:'https://images.pexels.com/photos/349494/pexels-photo-349494.jpeg',
    },
    {
        id:'03',
        name:'fila',
        description :'pantalon',
        size:'M',
        price:35,
        stock:10,
        category:'uomo',
        img:'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg',
    },
    {
        id:'04',
        name:'reef',
        description :'pantalon',
        size:'M',
        price:50,
        stock:20,
        category:'uomo',
        img:'https://images.pexels.com/photos/10433611/pexels-photo-10433611.jpeg',
    },
      {
        id:'05',
        name:'levis',
        description :'pantalon',
        size:'M',
        price:30,
        stock:10,
        category:'donne',
        img:'https://images.pexels.com/photos/235498/pexels-photo-235498.jpeg',
    },
    {
        id:'07',
        name:'caca',
        description :'pantalon',
        size:'M',
        price:20,
        stock:12,
        category:'donne',
        img:'https://images.pexels.com/photos/1759619/pexels-photo-1759619.jpeg/'
    },
    {
        id:'08',
        name:'puma',
        description :'pantalon',
        size:'M',
        price:30,
        stock:5,
        category:'donne',
        img:'https://images.pexels.com/photos/160599/beauty-leather-style-girl-160599.jpeg',
    },
    {
        id:'09',
        name:'fila',
        description :'pantalon',
        size:'M',
        price:35,
        stock:10,
        category:'donne',
        img:'https://images.pexels.com/photos/7872818/pexels-photo-7872818.jpeg',
    },
    {
        id:'10',
        name:'reef',
        description :'pantalon',
        size:'M',
        price:50,
        stock:20,
        category:'donne',
        img:'https://images.pexels.com/photos/921646/pexels-photo-921646.jpeg',
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