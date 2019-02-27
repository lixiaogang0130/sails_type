import { CoreModule as CoreModule} from '../core/CorController';
class Test extends CoreModule.CoreClass{
  protected extraMethods:Array<string> = [
    'home'
  ]
  public test:Function = async (req:any,res:any):Promise<void>=>{
    let arr = [1232,32];
    this.g._.each(arr,n=>{
      console.log(n);
    })
    console.log(this.g.moment().format('YYYY'));
  return  res.send(200)
  }
  public home:Function = async (req:any,res:any):Promise<void>=>{
    let arr = [1232,32];
    this.g._.each(arr,n=>{
      console.log(n);
    })
    let aa = await this.s.test.asdb();
    this.l.info('233333333333333');
    this.l.info('233333333333333')
   return res.reply(1001,222)
  }

}

export = new Test().exports()


// export async function test(req:any,res:any):Promise<void>{
//   let arr = [1232,32];
//   // aad.each(arr,n=>{
//   //   console.log(n)
//   // });
//   sails.config.globals._.each(arr,n=>{
//     console.log(n);
//   })
//   console.log(sails.config.globals.moment().format('YYYY'));
//   res.send(200)
// }




