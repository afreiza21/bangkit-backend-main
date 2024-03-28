export const find = async(req, res) =>{
    res.json({
        method: 'find'
    })
}

export const findOne = async(req, res) =>{
    res.json({
        method: 'findOne'
    })
}

export const created = async(req, res) =>{
    res.json({
        method: 'created'
    })
}

export const updated = async(req, res) =>{
    res.json({
        method: 'updated'
    })
}

export const deleted = async(req, res) =>{
    res.json({
        method: 'deleted'
    })
}