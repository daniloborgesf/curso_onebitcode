function grupo() {
  console.log("Export nomeado não-inline (agrupado)");
}

function a() { }
function b() { }
function c() { }
function d() { }

function exportacaoPadrao() {
  console.log("Export default não-inline");
}

export { grupo, a, b, c, d };
export default exportacaoPadrao;
