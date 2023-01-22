function prueba(req,res){
    let nombre;
    if(req.params.nombre){
        nombre = req.params.nombre;
    }else{
        nombre = "sin valor";
    }

    res.status(200).send(
        {
            data:[1,2,4],
            message: "El valor del parametro es "+nombre
        }
    );
}

function getFavorito(req,res){
    let favoriteId = req.params.id;

    res.status(200).send({favoriteId:favoriteId})
}

function saveFavorito(req,res){
    let params = req.body;

    res.status(201).send({favorito: params})
}
function updateFavorito(req,res){
    let params = req.body;

    res.status(201).send(
        {
            update:true
            ,favorito: params
        }
        )
}
function deleteFavorito(req,res){
    let favoriteId = req.params.id;

    res.status(200).send({delete:true,data:favoriteId})
}

module.exports = {
    prueba,
    getFavorito,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}
