var useragent = require('express-useragent-x');
var UserAgent = /** @class */ (function () {
    function UserAgent(source) {
        if (source === void 0) { source = 'unknown'; }
        this.agent = useragent.parse(source);
        return this.agent;
    }
    return UserAgent;
}());
module.exports = UserAgent;
