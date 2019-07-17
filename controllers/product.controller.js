//Instancia del modelo de Usuarios vacia
let _product;

const createProduct = (req, res) => {
    const product = req.body;
    _product.create(product)
    .then((data) =>{
        res.status(200);
        res.json({
            msg:"Producto creado correctamente",
            data:data
        });
    }) 
    .catch((err)=>{
        res.status(400);
        res.json({
            msg:"Error",
            data:err
        });
    })
}

const getProducts = (req,res) => {
    _product.find()
    .then((data) => {
        if(data.length == 0){
            res.status(204),
            res.json({
                msg:"No se encontraron datos"
            }) 
        }
        else{
            res.status(200),
            res.json({
                data:data
            })
        }
    })
    .catch((err) => {
        res.status(400);
        res.json({
            msg:"Error",
            data:err
        })
    })
}

const getProductbyId = (req,res) => {
    const id = req.params.id;
    _product.find({"_id":id})
    .then((data) => {
        res.status(200),
        res.json({
            data:data
        })
    })
    .catch((err) => {
        res.status(400);
        res.json({
            data:err
        })
    })
}

const updateProduct = (req,res) => {
    const id = req.params.id;
    const product = req.body;
    _product.findByIdAndUpdate(id, product, {new:true})
    .then((data) => {
        res.status(200);
        res.json({
            data:data
        })
    })
    .catch((err) => {
        res.status(400);
        res.json({
            data:err
        })
    })
}

const deleteProduct = (req,res) => {
    //const {id,param1,param2,paramn} = req.params;
    const id = req.params.id;
    _product.findByIdAndRemove(id)
    .then((data) =>{
        res.status(200);
        res.json({
            msg:"Producto eliminado correctamente",
            data:data
        })
    })
    .catch((err) => {
        res.status(400);
        res.json({
            msg:"error"
        })
    })
} 

//Se inicializa la variable user
module.exports = (Product) =>{
    _product = Product;
    return ({
        createProduct,
        getProducts,
        getProductbyId,
        updateProduct,
        deleteProduct,
    });
}