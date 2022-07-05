export const handleUser = (req, res) => {
    return res.send('<h1>User page</h1>');
};

export const handleMypage = (req, res) => {
    return res.send('MYPAGE!');
};

export const handleHome = (req, res) => {
    const client_id = '1000094620705168';
    const client_secret = '08ff9d5fe7f40427666685d87f1d8cb9';
    return res.send('Home');
};

export const handleTest = (req, res) => {
    return res.send('<h1>Test</h1>');
};

export const handleTestRemove = (req, res) => {
    return res.send('<h1>Remove</h1>');
};
