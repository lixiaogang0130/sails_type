import {CoreModule as CoreModule } from '../core/CorController';
import * as SQL from './User/user';
import { checkQueryState } from '../core/Util';

class Test extends CoreModule.CoreClass{
  protected extraMethods:Array<string>=[
    'single'
  ]
  protected single:Function = async (userId:number):Promise<any> =>{
    let select = SQL.default.single;
    let r = await this.h.query(select,[userId]);
    console.log(r)
    let c = checkQueryState(r,1001);
    if(c<0) return [-1,null,new Error(r.m)];
    if(c>0) return [c];
    return [1000,r.data];

  }
}
export = new Test().exports();
