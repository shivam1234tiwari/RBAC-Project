import jwt from "jsonwebtoken";
const protect = (req, res, next) => {
  try {
    let token;
    let authHeader = req.headers.Athorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .json({ message: "No token, authorization denied" });
      }
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      console.log("decoded users is :", req.user);
      next();
    }
  } catch (error) {
    res.status(400).json({
      message: "Token is not valid",
    });
  }
};
export default protect;
