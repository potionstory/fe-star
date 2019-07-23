const { Member } = require('../../model');

/* member 모두 찾기 */
exports.find = (req, res) => {
  Member.find({}).exec((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}

/* member 한 명 찾기 */
exports.findOne = (req, res) => {
  const _id = req.params.id;

  Member.findOne({ _id }).exec((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}

/* member 추가 */
exports.create = (req, res) => {
  const data = req.body;
  const member = new Member(data);

  member.save((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}

/* member 수정 */
exports.update = (req, res) => {
  const data = req.body;
  const _id = req.params.id;

  Member.update({ _id }, data).exec((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}

/* member 삭제 */
exports.remove = (req, res) => {
  const _id = req.params.id;

  Member.remove({ _id }).exec((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}