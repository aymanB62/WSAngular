export class ExpenseEntry{
    constructor(
         public id: number,
         public item: string,
         public amount: number,
         public category: string,
         public location: string,
         public spendOn:Date,
         public createdOn:Date
    ){}
}