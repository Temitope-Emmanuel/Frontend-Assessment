const config = {
  env: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  SERVER_URL: proces `http://localhost:${process.env.PORT || 3000}`,
  jwtSecret: process.env.jwtSecret || "Make person no tell me say i too lazy",
  TEST_DATABASE_URL:process.env.TEST_DATABASE_URL
}
export default config