let quadro = document.querySelector('.quadro');

function clique(numberclass) {
    if(numberclass == 1) {
        quadro.innerHTML = '<model-viewer src="burgerturtlerigged.glb" auto-rotate camera-controls style="width: 1000px; height: 600px;" shadow-intensity="1" exposure="1"></model-viewer>';
    } else if(numberclass == 2) {
        quadro.innerHTML = '<model-viewer src="clippit.glb" auto-rotate camera-controls style="width: 1000px; height: 600px;" shadow-intensity="1" exposure="1"></model-viewer>';
    } else {
        quadro.innerHTML = '<model-viewer src="bart_simpson.glb" auto-rotate camera-controls style="width: 1000px; height: 600px;" shadow-intensity="1" exposure="1"></model-viewer>';
    }
}