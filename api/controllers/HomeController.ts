import { CoreModule as CoreModule} from '../core/CorController';
class Home extends CoreModule.CoreClass{
  protected extraMethods:Array<string> = [
    'home'
  ]
  public test:Function = async (req:any,res:any):Promise<void>=>{
    let arr = [1232,32];
    this.g._.each(arr,n=>{
      console.log(n);
    })
    console.log(this.g.moment().format('YYYY'));
  return  res.status(200).send('home456')
  }
  public home:Function = async (req:any,res:any):Promise<void>=>{
    let arr = [1232,32];
    this.g._.each(arr,n=>{
      console.log(n);
    })
    console.log(this.g.moment().format('YYYY-MM-DD'));
   return res.status(200).send('home123')
  }

}

export = new Home().exports()



