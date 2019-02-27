export class Mapping{
  static resMapping:Map<number,string>=new Map([
    [0,'no data!!!'],
    [1000,'success'],
    //用户相关
    [1001,'user not found!!!']
  ])
  static replyMsg:Map<number,string> = new Map([
    [-1,'server error!!!']
  ])
  static databaseMsg:Map<number,string> = new Map([
    [2,'Unable create connection pool from database!!!'],
    [3,'Unable to get connection from connection pool!!!'],
    [4,'Unable to execute the sql statement!!!'],
    [1,'no data!!!'],
    [0,'success!!!']
  ])
}
