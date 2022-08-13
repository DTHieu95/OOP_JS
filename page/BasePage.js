import { Selector, t } from "testcafe"

class BasePage {
    constructor(){
        this.dynamicInputField = (id) => Selector(`#${id}`)
        this.dynamicButton = (buttonValue) => Selector('input').withAttribute('value' , `${buttonValue}`)
        this.pageHeader =  Selector('.head > h1')
        this.dynamicMenu = (menuName) => Selector('.firstLevelMenu > b').withText(`${menuName}`)
        this.dynamicSubMenu = (subMenuName) => Selector('li > a').withText(`${subMenuName}`)
        this.dynamicCheckBoxLabel = (labelName) => Selector(`label:contains(${labelName}`).nextSibling('input')
        this.dynamicDropdown = (id) => Selector(`${id}`)
        this.dynamicLinkText = (linkText) => Selector('a').withText(`${linkText}`)
        this.menuSide = (menuName) => Selector('#sidenav > li > a').withText(`${menuName}`)
        this.dynamicInputFieldByLabel = (label) => Selector(`label:contains(${label}`).nextSibling('input')
        this.dynamicDropdownByLabel = (label) => Selector(`label:contains(${label}`).nextSibling('select')
        
    }

    async inputValueDynamicField(idField , value){
        await t
        .typeText(this.dynamicInputField(idField) , value)
    }

    async clickDynamicButton(buttonValue){
        await t
        .click(this.dynamicButton(buttonValue))
    }

    async hoverMenuAndClickSubMenu(menu , subMenu){
        await t
        .hover(this.dynamicMenu(menu))
        .click(this.dynamicSubMenu(subMenu))
    }

    async checkToDynamicCheckbox(label){
        if (
        await t
        .expect(this.dynamicCheckBoxLabel(labelName).checked)
        .eql(false)
        ){
            await t.click(this.dynamicCheckBoxLabel(labelName))
        }
      
    }

    async selectValueInDynamicDropdown(idDropdown , value){
        await t
        .click(this.dynamicDropdown(idDropdown))
        .click(this.dynamicDropdown(idDropdown).find('option').withText(value))
    }

    async clickToDynamicLinkText(linkText){
        await t
        .click(this.dynamicLinkText(linkText))
    }

    async clickToDynamicMenuSide(menuName){
        await t
        .click(this.menuSide(menuName))
    }

    async inputValueDynamicFieldByLabel(label , value){
        await t
        .typeText(this.dynamicInputFieldByLabel(label) , value)
    }

    async selectValueInDynamicDropdownByLabel(label , value){
        await t
        .click(this.dynamicDropdownByLabel(label))
        .click(this.dynamicDropdownByLabel(label).find('option').withText(value))
    }

    async isFieldDisabledByLabel(label){ 
        return this.dynamicInputFieldByLabel(label).hasAttribute('disabled')
    }






}

export default new BasePage()

