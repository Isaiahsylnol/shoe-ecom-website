
const getTableData = (req, res, db) => {
    db.select('*').from('shoe')
      .then(items => {
        if(items.length){
          res.json(items)
        } else {
          res.json({dataExists: 'false'})
        }
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }

  // Where clause 
  const findAllUnder200 = (req, res, db) => {
    db('shoe').where('price', '>=', 200).then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
  }

  // Insert to database 
  const postTableData = (req, res, db) => {
    const { id, name, model, price, size, color, description, rating} = req.body
    //const added = new Date()
    db('shoe').insert({id, name, model, price, size, color, description, rating})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  // Replace data
  const putTableData = (req, res, db) => {
    const { id, name, model, size, price, color, description, rating } = req.body
    db('shoe').where({id}).update({id, name, model, size, price, color, description, rating})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  const deleteTableData = (req, res, db) => {
    const { id } = req.body
    db('shoe').where({id}).del()
      .then(() => {
        res.json({delete: 'true'})
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  module.exports = {
    getTableData,
    postTableData,
    putTableData,
    deleteTableData,
    findAllUnder200
  }