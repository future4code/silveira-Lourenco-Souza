export const goToHomePage = (navigate) => {
  navigate("/")
}
export const goToFeedPage = (navigate) => {
  navigate("/post")
}
export const goToLoginPage = (navigate) => {
  navigate("/")
}
export const goToSignupPage = (navigate) => {
  navigate("/signup")
}
export const goToPostDetailsPage = (navigate, id) => {
  navigate(`/post/${id}`)
}