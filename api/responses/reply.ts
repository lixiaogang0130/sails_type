import { Mapping } from "../core/Mapping";
declare const sails: any;
const Router = (req: any, res: any, e: any = null): void => {
  let start = req._startTime;
  let end = sails.config.globals.moment();
  sails.config.log.custom.router(
    "code:",
    req.decoded,
    req.method,
    req.url,
    res.statusCode,
    end - start,
    "ms"
  );
  return;
};
export = function(c: number = 0, d: any = null, e: any = null, s: number = -1) {
  let { req, res } = this;
  let reply: any = { status: 0 };
  if (e && e != null) {
    sails.config.log.custom.error(
      "code:",
      req.decoded,

      req.method,

      req.url,
      "->error:",
      e.message
    );
    reply.errMsg = Mapping.replyMsg.get(s);
  } else {
    reply.status = c === 1000 ? 1 : 2;
    reply.msg = Mapping.resMapping.get(c) || Mapping.resMapping.get(0);
    if(c===1000){
      reply.data = d;
    }
  }
  res.status(200).json(reply);
  return Router(req, res);
};
