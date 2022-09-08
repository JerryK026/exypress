// kor-version

/**
 * ===Korean===
 * language can be replaced by plugin
 */
export default {
  ENV_NOT_FOUND: '⚠️ .env 파일을 찾을 수  없습니다! ⚠️',

  SERVER_RUNNING: function (port: number) {
    return `
    =============Server Listening=============
    ${port}번 포트에서 서버가 실행되었습니다!
    ==========================================
    `;
  },
};
