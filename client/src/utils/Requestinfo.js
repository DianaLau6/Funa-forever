const useragent = require('useragent');

function getRequestInfo(req) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
  const agent = useragent.parse(req.headers['user-agent'] || '');
  const dispositivo = `${agent.toAgent()} - ${agent.os.toString()}`;
  return { ip, dispositivo };
}

module.exports = { getRequestInfo };

