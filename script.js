let quadro = document.querySelector('.quadro');

function clique(numberclass) {
    if(numberclass == 1) {
        quadro.innerHTML = '<model-viewer src="burgerturtlerigged.glb" class="modelovisual" auto-rotate camera-controls shadow-intensity="1" exposure="1"></model-viewer>';
    } else if(numberclass == 2) {
        quadro.innerHTML = '<model-viewer src="clippit.glb" class="modelovisual" auto-rotate camera-controls shadow-intensity="1" exposure="1"></model-viewer>';
    } else {
        quadro.innerHTML = '<model-viewer src="bart_simpson.glb" class="modelovisual" auto-rotate camera-controls shadow-intensity="1" exposure="1"></model-viewer>';
    }
}
