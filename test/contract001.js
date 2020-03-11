const Contract001 = artifacts.require("Contract001");

let instancia;

beforeEach(async () => {
    instancia = await Contract001.deployed()
});

contract('Contract001', accounts => {
  it('Data 01| Crear valores en data y que los valores que retorne sean iguales a los cargados', async() =>{       
    await instancia.setData("Valor de prueba")
    assert.equal(await instancia.data(), "Valor de prueba", "Los valores no coinciden")
  })
  
});
