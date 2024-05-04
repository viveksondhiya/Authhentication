import { getUser } from "../service/auth.js";

export const verifyUser = (req, res, next) => {
    const sessionId = req.cookies?.uid;
    const user = getUser(sessionId);
    if (user) {
        // If user is valid, attach user object to request for further processing
        req.user = user;
        next(); // Proceed to the next middleware or route handler
    } else {
        // If user is not valid, redirect to login page or send error response
        return res.status(401).json({ error: "Unauthorized" });
    }
};
export default verifyUser;