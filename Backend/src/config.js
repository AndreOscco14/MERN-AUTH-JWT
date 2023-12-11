// export const TOKEN_SECRET = 'some secret key'
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret"
export const FRONTEND_URL_LOC = process.env.FRONTEND_URL || "http://localhost:5173";