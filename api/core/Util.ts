enum CODE {
  success = 0,
  no = 1,
  failed = -1
}
export function checkQueryState(o:any,code?:number){
  if(o.e===0){
    return CODE.success;
  }
  if(o.e===1){
    return code||CODE.no;
  }
  if(o.e>1){
    return CODE.failed;
  }
}
