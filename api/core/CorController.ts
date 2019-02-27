declare let sails: any;
export module CoreModule{
  export class CoreClass {
    protected c: any = sails.config;
    protected h: any = sails.helpers;
    protected g: any = sails.config.globals;
    protected s: any = sails.services;
    protected l:any = sails.config.log.custom;
    protected exportMethods:object = {};
    protected extraMethods:Array<string> = [];
    private Methods:Array<string> = [
      'index',
      'test',
      'list'
    ]
    public exports():any{
      this.Methods = this.g._.concat(this.Methods,this.extraMethods);
      this.g._.each(this.Methods,n=>{
        if(this[n] !=undefined && typeof this[n] =='function'){
          this.exportMethods[n] = this[n];
        }
      })
      return this.exportMethods;
    }

  }
}

