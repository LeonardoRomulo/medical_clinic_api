const validaMedicos = (req, res, next) => {

    const {nome, telefone, descricao} = req.body || {};

    if (!nome || typeof nome !== 'string' || nome.length < 3 || !/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(nome)){
        return res.status(400).json({error:"Nome inválido"});
    };

    if (!telefone || typeof telefone !== 'string' || !/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone) ){
        return res.status(400).json({error:"Telefone inválido "});
    };

    if(!descricao || typeof descricao !== 'string' || descricao.trim() ===''){
        return res.status(400).json({error:"Descrição inválida"});
    }
    next();
}

export default validaMedicos