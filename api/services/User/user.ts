export default {
  single: `SELECT t.*,IF (k.id IS NULL, 0, 1) AS isLecture, k.id AS lecturerId
      FROM (
          SELECT u.nickname AS nickName,u.faceimg AS coverUrl,u.mobile,r.userid AS openId,r.uid AS userId FROM
            (tp_nbv_openid_uid r,tp_nbv_userinfo u) WHERE r.uid = u.uid AND r.uid = 5
           ) t LEFT JOIN tp_yb_kids_lecturer k ON k.uid = t.userId`
};
