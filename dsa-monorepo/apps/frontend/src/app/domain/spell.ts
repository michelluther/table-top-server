export class Spell {

  id: number;
  name: String;
  spellGroupId: number;
  // be: String;

  dice1: String;
  dice2: String;
  dice3: String;
  be: String;
  complexity: string
  
  constructor(dataObject: Object) {

    this.spellGroupId = dataObject['type'];
    this.id = dataObject['id'];
    this.name = dataObject['name'];
    // this.be = dataObject['behinderung'];
    this.dice1 = dataObject['dice1'];
    this.dice2 = dataObject['dice2'];
    this.dice3 = dataObject['dice3'];
    this.be = dataObject['be']
    this.complexity = dataObject['complexity'];
      
}
getAscensionPricingTableColumn():string {
  return `price${this.complexity}`
}

}