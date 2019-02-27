declare let sails: any;
import * as Mysql from "mysql";
import {Mapping as Mapping} from "../core/Mapping";
let p = Mysql.createPool(sails.config.custom.database);
export = {
  inputs: {
    sql: {
      type: "string",
      required: true
    },
    values: {
      type: "ref"
    },
    code: { type: "number" }
  },
  exits: {},
  fn: async function(inputs: any, exits: any): Promise<object> {
    let r = {
      e: 2,
      m: null,
      data: []
    };
    if (!p) {
      r.m = Mapping.databaseMsg.get(2);
      return exits.success(r);
    }
    p.getConnection((e, connection) => {
      if (e) {
        r.e = 3;
        r.m = Mapping.databaseMsg.get(3);
        return exits.success(r);
      }
      connection.query(inputs.sql, inputs.values, (e, result) => {
        if (e) {
          r.e = 4;
          r.m = Mapping.databaseMsg.get(4)
          return exits.success(r);
        }

        r.e = 0;
        if (result.length === 0) {
          r.e = 1;
        }
        r.m = Mapping.databaseMsg.get(r.e);
        r.data = result;
        return exits.success(r);
      });
    });
  }
};
