if('serviceWorker'in navigator){
    navigator.serviceWorker.register('/src/assets/sw.js')
    .then(reg=>console.log('Registro SW exitoso',reg))
    .catch(err=>console.warn('error al tratar de registrar el sw',err))
}

