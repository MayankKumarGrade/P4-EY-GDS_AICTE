import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        const {token} = req.header("x-auth-token");

        if (!token) {
            return res.status(401).json({ success: false, message: "No token, authorization denied" });
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        if (verified !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Token verification failed, authorization denied" });
        }

        req.user = verified.id;

        next();
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Server error" });
    }
    
};

export default adminAuth;