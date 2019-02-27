import { CoreModule } from "../core/CorController";
import {checkQueryState} from '../core/Util';
class User extends CoreModule.CoreClass {
  protected extraMethods: Array<string> = ["single"];
  public single: Function = async (req: any, res: any): Promise<void> => {
   let r = await this.s.user.single(5);
   console.log(r);
   return res.reply(...r)
  };
}

export = new User().exports();
