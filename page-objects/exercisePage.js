module.exports = {

    url: 'https://www.exercise1.com/values',

    elements: {
        valueLabel1: 'div#lbl_val_1',
        valueLabel2: 'div#lbl_val_2',
        valueLabel3: 'div#lbl_val_3',
        valueLabel4: 'div#lbl_val_4',
        valueLabel5: 'div#lbl_val_5',
        valueText1: 'div#txt_val_1',
        valueText1: 'div#txt_val_2',
        valueText1: 'div#txt_val_3',
        valueText1: 'div#txt_val_4',
        valueText1: 'div#txt_val_5',
        valueLabelTotal: By.css('div#lbl_val_ttl'),
        valueTextTotal: By.css('div#txt_ttl_val'),
        itemsList: 'div[class="items"]',
        items: By.css('div#items')
    },

    getValuesSize: function(){
        let lblValueSize = 0;
        driver.findElements(By.xpath("//*[contains(@id, 'lbl_val')]")).then(function(elements){
            lblValueSize = elements.length;
        });
        return lblValueSize;
    },

    assertCountValues: function(countValues) {
        driver.findElements(By.xpath("//*[contains(@id, 'lbl_val')]")).then(function(elements){
            let length = elements.length;
            assert.equal(length, countValues, 'Count of values is correct');
        });
    },

    valueGreaterThanZero: function() {
        let valueSize = page.exercisePage.getValuesSize();
        for(let i=1; i<=valueSize; i++){
                driver.findElement(By.id(`txt_val_${i}`)).then(function(elem){
                    elem.getText().then(function(text){
                        let textValue = Number(text.replace(/[^0-9.-]+/g,""));
                        // console.log(textValue);
                        assert.isAbove(textValue, 0, 'Currency Text Value is greater than 0');
                    })
                });
            }
    },

    valuesFormatCurrency: function(){
        let valueSize = page.exercisePage.getValuesSize();
        // Regex to match the currency format
        let regex1 = /^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?\.\d{1,2}$/;
        for(let i=1; i<=valueSize; i++){
            driver.findElement(By.id(`txt_val_${i}`)).then(function(elem){
                elem.getText().then(function(text){
                    assert.match(text, regex1, 'Currency Format Matches');
                })
            });
        }
    },

    totalBalance: function(){
        let totalBalSel = page.exercisePage.elements.valueTextTotal;
        let totalBalance=0;
        for(let i=1; i<=5; i++){
            driver.findElement(By.id(`txt_val_${i}`)).then(function(elem){
                elem.getText().then(function(text){
                    let textValue = Number(text.replace(/[^0-9.-]+/g,""));
                    totalBalance += textValue;
                })
            });
        }
        driver.findElement(totalBalSel).then(function(elemTotalText){
            elemTotalText.getText().then(function(textTotal){
                let textValueTotal = Number(textTotal.replace(/[^0-9.-]+/g,""));
                assert.equal(totalBalance, textValueTotal, 'Total Balance should be equal to sum of individual values');
            })
        });
    },
};