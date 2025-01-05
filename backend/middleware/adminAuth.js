import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        const {token} = req.headers

        if (!token) {
            return res.json({ success: false, message: "No token, authorization denied" });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Token verification failed, authorization denied" });
        }
        next()
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Server error" });
    }
    
};

export default adminAuth;