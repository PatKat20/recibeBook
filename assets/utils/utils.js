const sequenciaId = {
    _id:1,
    get id(){
        return this._id++
    }
}

function callToast(text, colorFrom = "#00b09b", colorTo="#96c93d"){
    Toastify({
        text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

export { sequenciaId, callToast }