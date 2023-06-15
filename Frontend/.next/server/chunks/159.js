"use strict";
exports.id = 159;
exports.ids = [159];
exports.modules = {

/***/ 236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth)
/* harmony export */ });
/* unused harmony export db */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
//TODO: move those keys keys env variables. in vercel its not required.
const firebaseConfig = {
    apiKey: "AIzaSyD7uRhxqFEx0tA0smTLY_YezfWzV5IYncQ",
    authDomain: "netflix-clone-ce54b.firebaseapp.com",
    projectId: "netflix-clone-ce54b",
    storageBucket: "netflix-clone-ce54b.appspot.com",
    messagingSenderId: "160622151554",
    appId: "1:160622151554:web:ff26fc56e1d4a63c90719b"
};
// Initialize Firebase
// Initialize Firebase
const app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (app)));
 //This is how you add the firebase to your project.
 //

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "Z": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({
    user: null,
    signUp: async ()=>{},
    signIn: async ()=>{},
    logout: async ()=>{},
    error: null,
    loading: false
});
const AuthProvider = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [initialLoading, setInitialLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, (user)=>{
            if (user) {
                // Logged in...
                setUser(user);
                setLoading(false);
            } else {
                // Not logged in...
                setUser(null);
                setLoading(true);
                router.push("/Login");
            }
            setInitialLoading(false);
        }), [
        _firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I
    ]);
    const signUp = async (email, password)=>{
        setLoading(true);
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, email, password).then((userCredential)=>{
            setUser(userCredential.user);
            router.push("/");
            setLoading(false);
        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));
    };
    /*
    const signIn = async (email: string, password: string) => {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                router.push('/')
                setLoading(false)
            })
            .catch((error) => alert(error.message))
            .finally(() => setLoading(false))
    }
    */ // Inside your useAuth hook...
    const signIn = async (email, password, otp)=>{
        setLoading(true);
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, email, password).then((userCredential)=>{
            if (otp) {
                return fetch("http://localhost:8080/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Basic " + btoa(email + ":" + password)
                    },
                    body: JSON.stringify({
                        OTP: otp
                    })
                }).then((response)=>response.json()).then((data)=>{
                    if (data.success) {
                        setUser(userCredential.user);
                        router.push("/");
                    } else {
                        throw new Error("OTP_REQUIRED");
                    }
                });
            } else {
                setUser(userCredential.user);
                router.push("/");
            }
        }).catch((error)=>{
            if (error.message === "OTP_REQUIRED") {
                throw error;
            }
            alert(error.message);
        }).finally(()=>setLoading(false));
    };
    const logout = async ()=>{
        setLoading(true);
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I).then(()=>{
            setUser(null);
        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));
    };
    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({
            user,
            signUp,
            signIn,
            error,
            loading,
            logout
        }), [
        user,
        loading,
        error
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: memoedValue,
        children: !initialLoading && children
    });
};
// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context comopnent.
function useAuth() {
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;