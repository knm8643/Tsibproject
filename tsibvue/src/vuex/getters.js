export default {
    getUserId: state => state.userId,
    getErrorState: state => state.errorState,
    getIsAuth: state => state.isAuth,
    loggedId(state) {
    return !!state.user
    }
}