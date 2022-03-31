const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';
const SECRET_KEYRESET = 'secretkey123456QWE';
const _ = require("underscore");
 const transporter = require('../../config/mailer');


exports.createUser =  (req, res, next) => {

  const body = req.body;
  const newUser = {
   
    nombre: body.nombre,
    apellidos:body.apellidos,
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
    cdeplayera:body.cdeplayera,
    ddeplayera:body.ddeplayera,
    cdepantalon:body.cdepantalon,
    ddepantalon:body.ddepantalon,
    cdebotas:body.cdebotas,
    ddebotas:body.ddebotas,
    cdecachucha:body.cdecachucha,
    ddecachucha:body.ddecachucha,
    cdechamarra:body.cdechamarra,
    ddechamarra:body.ddechamarra,
    cdechaleco:body.cdechaleco,
    ddechaleco:body.ddechaleco,
    cdelentes:body.cdelentes,
    ddelentes:body.ddelentes,
    pensionado:body.pensionado, 
    niveldeescolaridad:body.niveldeescolaridad,
    rol:body.rol,
    contrasena: bcrypt.hashSync(body.contrasena),
 }

  User.create(newUser, (err, user) => {
    
    if (err) return res.status(500).send('Server error' , err);
    
    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({ id: user.id },
      SECRET_KEY, {
        expiresIn: expiresIn
      });
    const dataUser = {
      id: user.id,
      nombre: user.nombre,
      correoelectronico: user.correoelectronico,
      rol: user.rol,
      accessToken: accessToken,
      expiresIn: expiresIn,
      idimage: user.idimage,
      fechadeentrada:user.fechadeentrada
    }
    // response 
    res.send({ dataUser });
    
  });
}

exports.olvidasteContraseña =  (req, res, next) => {

  const body = req.body;

  const newUser = {
    correoelectronico: body.correoelectronico
 }
 
// mandas a buscar el correo 
 User.findOne( { correoelectronico: newUser.correoelectronico},  (err, user) => {

  if (err) return res.status(500).send('Server error!');
// en caso de que no lo mande pedirlo
  if(!(newUser.correoelectronico)){
    return res.status(400).send( {message: 'Correo is required '})
  }
// si no existe el correo
 if(!user){
  return res.status(400).send({ message:'check your email that be right'});
 }
 

 const message = 'check your email for a link to resent your password';

 let emailStatus = 'OK';
 
console.log(user._id)
// creas un token con las siguientes cosas 
     const token = jwt.sign({ id:user._id, correoelectronico: user.correoelectronico}, SECRET_KEYRESET, { expiresIn: '10m'})
   //  console.log('token:',token)
    verificationLink = `http://localhost:8100/recuperarcontrasena/${token}`;

    
    // este es para usar el id para agregarle el token en la base de datos
   const dataUser= {
      id: user.id
    }
   try {
 //TODO : SendEmail
     // send mail with defined transport object
     transporter.sendMail({
      from: '"Petición de cambio de contraseña para Protexum" <ivanperez1l40@gmail.com>', // sender address
      to: user.correoelectronico, // list of receivers
      subject: "olvidar contraseña", // Subject line
      html:`<b>Hola ${user.nombre} ${user.apellidos}</b>
      <br>
       <b>Hemos recibido una solicitud para restablecer tu contraseña, da clic en el siguiente botón y sigue las instruccione</b> 
      <a href="${verificationLink}" > ${verificationLink} </a>`,  // html body
    });
   }catch(err){
    emailStatus = err
    return res.status(400).send( {message: 'Something goes wrong'})
   }
    
   
   
     // aqui se agrega el token en la base de datos
     User.findByIdAndUpdate(dataUser.id, {resetToken: token} ,{ new: true, runValidators: true, context: 'query' }, (err, userT) =>{
      if (err) return res.status(500).send('Server error');

      if (!userT) res.status(500).send( {message:`error al actualizar ${err} `} )

     const dataUser = {
        resetToken: token,
        message,
        info: emailStatus,
        verificationLink
      }

      res.send( { dataUser});
     })
    
    
      
     
      
      
 });


 
}

exports.createcontraseña =  (req, res, next) => {
  const token = req.params.token;
  const body = req.body;
console.log(body)
  const newUser = {
    contrasena: bcrypt.hashSync(body.contrasena)
 }

 // para agregarla a los header
 const resetToken = token;
 console.log(resetToken)
 //es para verificar el token desde el front 
 jwtPayload = jwt.verify(resetToken, SECRET_KEYRESET );
 // es para buscar el token en la base de datos 
 
 User.findOne( {resetToken},(err, user) => {


  if (err) return res.status(500).send('Server error!');
// en caso de que no lo mande pedirlo
  if(!(resetToken && newUser.contrasena)){
   return res.status(400).send( { message: 'All the fields are required'});
  }
// si no existe el correo
 if(!user){
  return res.status(400).send({ message:'check your email that be right'});
 }


// de la  busqueda anterior saco el id para hacer la busqueda para actualizar la contrasena
 const dataUser= {
  id: user.id
}
// es para cambiar la contraseña
 User.findByIdAndUpdate(dataUser.id, newUser ,{ new: true, runValidators: true, context: 'query' }, (err, userT) =>{
  if (err)  return res.status(400).send( {message: 'something goes wrong'} )
// respuesta correcta 
  return res.send( {message: 'password changed'})
 })



 

  

})
 

 



}


exports.updateUser = (req, res, next) => {
  
  const idUsuario = req.params.id
 
  let body = _.pick(req.body, [
    'nombre',
    'apellidos',
    'curp',
    'nsegurosocial',
    'rfc',
    'domicilio',
    'telefono',
    'telefonoadicional',
    'creditodeInfonavit',
    'estadocivil',
    'correoelectronico',
    'cdeplayera',
    'ddeplayera',
    'cdepantalon',
    'ddepantalon',
    'cdebotas',
    'ddebotas',
    'cdecachucha',
    'ddecachucha',
    'cdechamarra',
    'ddechamarra',
    'cdechaleco',
    'ddechaleco',
    'cdelentes',
    'ddelentes',
    'pensionado',
    'niveldeescolaridad',
    'rol'
  
    

  ])
 
  

  User.findByIdAndUpdate(idUsuario, body ,{ new: true, runValidators: true, context: 'query' },(err,user)=>{
    if (err) return res.status(500).send('Server error');

    if (!user) res.status(500).send( {message:`error al actualizar ${err} `} )
      

      const dataUser = {
        nombre: user.nombre,
        apellidos: user.apellidos,
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
        correoelectronico: user.correoelectronico,
        cdeplayera:user.cdeplayera,          
        ddeplayera:user.ddeplayera ,  
        cdepantalon:user.cdepantalon,
        ddepantalon:user.ddepantalon,
        cdebotas:user.cdebotas,
        ddebotas:user.ddebotas,
        cdecachucha:user.cdecachucha,
        ddecachucha:user.ddecachucha,
        cdechamarra:user.cdechamarra,
        ddechamarra:user.ddechamarra,
        cdechaleco:user.cdechaleco,
        ddechaleco:user.ddechaleco,
        cdelentes:user.cdelentes,
        ddelentes:user.ddelentes,
        pensionado:user.pensionado, 
        niveldeescolaridad:user.niveldeescolaridad,
        rol:user.rol,
        contrasena: user.contrasena,
        fileUrl: user.fileUrl
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
      res.status(409).send({ message: 'Something is wrong1', err });
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
        res.send({ dataUser } );
      } else {
        // password wrong
        res.status(409).send({ message: 'Something is wrong2', err });
      }
    }
  });
}


exports.deleteUser = (req, res) => {
  
  const idUsuario = req.params.id
  

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


exports.obtenerUser = (req, res) => {
  
  const idUsuario = req.params.id
  

  User.findById(idUsuario,{
   
  },(err,user)=>{
    if (err) return res.status(500).send('Server error');
    
   
 
    // response 
    res.send({ user });
  })
}







