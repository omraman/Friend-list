module.exports = (app, db) => {
    app.get('/list', (req, res) => {
        db.friends.findAll().then((result) => res.json(result));
    });

    app.get('/list/:id', (req, res) => {
        db.friends.findByPk(req.params.id).then((result) =>  res.json(result));
    });

    app.post('/addNew', (req, res) => {
        db.friends.create({
            id: req.body.id,
            name: req.body.name,
            homeTown: req.body.homeTown
        }).then((result) => res.json({ message:"Added Successfully", result }));
    });

    app.put('/update/:id', (req, res) => {
        db.friends.update({
            name: req.body.name,
            homeTown: req.body.homeTown
        },
        {
            where:{
                id: req.params.id
            }
        }).then((result) => {
            res.json({message: "Updated Successfully"})
        });
    });

    app.delete('/delete/:id', (req, res) => {
        db.friends.destroy({
            where:{
                id: req.params.id
            }
        }).then((result) => {
            res.json({ message: "Deleted Successfully" })
        })
    })
}

