import {browser, element, by} from 'protractor';

describe('Mi Test', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");
    });


    //creación de prueba 1
    it("En registro aparece correctamente", ()=>{
        expect(element(by.css("ion-button ion-button")).getText()).toContain("Registro");

    }); //fin de prueba 1


});