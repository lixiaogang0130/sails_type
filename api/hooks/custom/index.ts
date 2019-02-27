
const checkDataBase = async ():Promise<boolean>=>{

  return true;
}

export = function customDefinedHook(sails){
  return {
    initialize:async ():Promise<any>=>{
      await checkDataBase();
    },
    routes:{
      before:{
        '/*':{
          skipAssets:true,
          fn:async function(req,res,next){
            req._startTime = sails.config.globals.moment();
            return next();
          }
        }
      },
      after:{
        '/*':{
          skipAssets:true,
          fn:async function(req,res,next){
            sails.config.log.custom.router('not found',' ',req.url)
            return res.status(404).json('The uri you try to access is not found,please check your request~~'+'::your request uri is '+req.method+' '+ req.url);
          }
        }
      }

    }
  }

}

