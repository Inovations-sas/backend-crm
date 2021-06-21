const express = require('express')
const app = express()
const {sequelize} = require('./app/Models')

// Settings
app.set('PORT', process.env.PORT || 3000)

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
// app.use('/', require('./routes'))
// app.use('/users', require('./routes/user'))
// app.use('/posts', require('./routes/post'))

// Launcher
app.listen(app.get('PORT'), () => {
  console.log(`Server on port: ${app.get('PORT')}`)

  sequelize
    .authenticate()
    .then(() => {
      console.log(`Se ha establecido la conexion`)
    })
    .catch(err => {
      console.log(err)
    })
})
