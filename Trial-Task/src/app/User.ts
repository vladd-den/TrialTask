
export class User {
    constructor(
      public id: number,
      public name: string,
      public Active: boolean
    ) { this.id = id, this.Active = Active, this.name = name}
}