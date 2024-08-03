const setCookie = (res, name, value, options) => {
    res.cookie(name, value, options);
};

const createCommonCookieOptions = (maxAge, path = '/') => ({
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    maxAge: maxAge,
    path: path
});

const setRefreshTokenCookie = (res, refreshToken) => {
    const path = `${process.env.FRONT_ADDRESS}/api/user/refreshToken`;
    const options = createCommonCookieOptions(86400000 * 30, path); // 30 days
    setCookie(res, 'refreshToken', refreshToken, options);
};

const setTokenCookie = (res, token) => {
    const secure = process.env.NODE_ENV !== 'development';
    const options = createCommonCookieOptions(secure, 86400000); // 1 day
    setCookie(res, 'token', token, options);
};

module.exports = {
    setRefreshTokenCookie,
    setTokenCookie
};
