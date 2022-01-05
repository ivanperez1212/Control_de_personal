const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';




exports.createUser = (req, res, next) => {
  const body = req.body;
  const newUser = {
   
     nombre: body.nombre,
    curp: body.curp, 
    nsegurosocial: body.nsegurosocial,
    rfc: body.rfc, 
    domicilio:body.domicilio,
    fechadeentrada:body.fechadeentrada, 
    fechadenacimiento:body.fechadenacimiento, 
    telefono:body.telefono, 
    telefonoadicional:body.telefonoadicional,
    creditodeInfonavit:body.creditodeInfonavit, 
    estadocivil:body.estadocivil, 
    correoelectronico:body.correoelectronico, 
    talladeplayera:body.talladeplayera, 
    talladepantalon:body.talladepantalon,
    pensionado:body.pensionado, 
    niveldeescolaridad:body.niveldeescolaridad,
    rol:body.rol,
    contrasena: bcrypt.hashSync(body.contrasena)
   
 
 }
  

  User.create(newUser, (err, user) => {
    if (err && err.code === 11000) return res.status(409).send('Email already exists');
    if (err) return res.status(500).send('Server error');
    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({ id: user.id },
      SECRET_KEY, {
        expiresIn: expiresIn
      });
    const dataUser = {
      nombre: user.nombre,
      correoelectronico: user.correoelectronico,
      rol: user.rol,
      accessToken: accessToken,
      expiresIn: expiresIn
    }
    // response 
    res.send({ dataUser });
  });
}

exports.updateUser = (req, res, next) => {
  
  const body = req.body;
  const idUsuario = '61ce80352c8cfac021086155'
  

  User.findByIdAndUpdate(idUsuario,{
    nombre: body.nombre,
    curp: body.curp, 
    nsegurosocial: body.nsegurosocial,
    rfc: body.rfc, 
    domicilio:body.domicilio,
    fechadeentrada:body.fechadeentrada, 
    fechadenacimiento:body.fechadenacimiento, 
    telefono:body.telefono, 
    telefonoadicional:body.telefonoadicional,
    creditodeInfonavit:body.creditodeInfonavit, 
    estadocivil:body.estadocivil, 
    talladeplayera:body.talladeplayera, 
    talladepantalon:body.talladepantalon,
    pensionado:body.pensionado, 
    niveldeescolaridad:body.niveldeescolaridad,
    rol:body.rol

  },(err,user)=>{
    if (err) return res.status(500).send('Server error');
    
    const dataUser = {
      nombre: user.nombre,
    curp: user.curp, 
    nsegurosocial: user.nsegurosocial,
    rfc: user.rfc, 
    domicilio:user.domicilio,
    fechadeentrada:user.fechadeentrada, 
    fechadenacimiento:user.fechadenacimiento, 
    telefono:user.telefono, 
    telefonoadicional:user.telefonoadicional,
    creditodeInfonavit:user.creditodeInfonavit, 
    estadocivil:user.estadocivil, 
    talladeplayera:user.talladeplayera, 
    talladepantalon:user.talladepantalon,
    pensionado:user.pensionado, 
    niveldeescolaridad:user.niveldeescolaridad,
    rol:user.rol
    }
    // response 
    res.send({ dataUser });
  })
}



exports.loginUser = (req, res, next) => {
  const body = req.body;
  const userData = {
    correoelectronico: body.correoelectronico,
    contrasena:body.contrasena
  }
  User.findOne({ correoelectronico: userData.correoelectronico }, (err, user) => {
    if (err) return res.status(500).send('Server error!');

    if (!user) {
      // email does not exist
      res.status(409).send({ message: 'Something is wrong1' });
    } else {
      const resultPassword = bcrypt.compareSync(userData.contrasena, user.contrasena);
      if (resultPassword) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });
       // datos que vas a mandar a front
        const dataUser = {
          nombre: user.nombre,
          correoelectronico: user.correoelectronico,
          id: user.id,
          rol:user.rol,
          accessToken: accessToken,
          expiresIn: expiresIn
        }
        res.send({ dataUser });
      } else {
        // password wrong
        res.status(409).send({ message: 'Something is wrong2' });
      }
    }
  });
}


exports.deleteUser = (req, res, next) => {
  
  const body = req.body;
  const idUsuario = '61ce80352c8cfac021086155'
  

  User.findByIdAndUpdate(idUsuario,{
    activo: false

  },(err,user)=>{
    if (err) return res.status(500).send('Server error');
    
    const dataUser = {
     nombre: user.nombre,
      activo: user.activo
    
    }
    // response 
    res.send({ dataUser });
  })
}









