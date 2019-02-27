import {CoreModule as CoreModule } from '../core/CorController';

class Test extends CoreModule.CoreClass{
  protected extraMethods:Array<string>=[
    'asdb'
  ]
  protected asdb:Function = async (req:any,res:any):Promise<any> =>{
    return 'adfdfe'
  }
}
export = new Test().exports();
