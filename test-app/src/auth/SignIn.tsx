// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//
// const SignIn = () => {
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       // IdP data available using getAdditionalUserInfo(result)
//       // ...
//       console.log(credential, token, user);
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//       console.log(errorCode, errorMessage, email, credential);
//     });
// };
//
// export default SignIn;
//
//

// import { useState } from "react";
// import { IoLogoGoogle } from "react-icons/io";
import { auth, provider } from "./firebase.ts"; // Firebaseの認証関連の設定をインポート
import {
  /* signInWithEmailAndPassword, */ signInWithPopup,
} from "firebase/auth"; // Firebaseの認証関連のメソッドをインポート

export default function SignInModal(
  handleClose: () => void,
  showSignUpModal: () => void,
) {
  // Googleアカウントを使用してログイン
  const signInwithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider); // FirebaseのsignInWithPopupメソッドを使用してGoogleアカウントでのサインインを試行
      handleClose(); // モーダルを閉じる
    } catch (error: unknown) {
      console.error("Googleサインインエラー:", error.message); // エラーメッセージを表示
      console.error(error); // エラーをコンソールに出力
    }
  };

  return (
    <>
      <h3 className="text-center p-0">ログイン</h3>
      <hr className="m-4" />
      <div className="text-center">
        <button className="mb-4" onClick={signInwithGoogle}>
          サインイン
        </button>
        <div className="text-center">
          <p>
            アカウントをお持ちではない方&nbsp;&nbsp;&nbsp;&nbsp;
            <button variant="link" onClick={showSignUpModal}>
              登録する
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
