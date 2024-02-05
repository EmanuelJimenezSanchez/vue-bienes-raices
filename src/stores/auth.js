import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {

  const auth = useFirebaseAuth()
  const authUser = ref({})
  const errorMsg = ref('')
  const errorCodes = {
    'auth/invalid-email': 'El email es inválido',
    'auth/user-disabled': 'El usuario ha sido deshabilitado',
    'auth/user-not-found': 'Usuario no encontrado',
    'auth/invalid-credential': 'Usuario o contraseña incorrectos',
    'auth/wrong-password': 'El password es incorrecto',
    'auth/too-many-requests': 'Demasiados intentos, intente más tarde'
  }

  const login = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        errorMsg.value = ''
        authUser.value = userCredential.user

        console.log(authUser.value)
      })
      .catch((error) => {
        errorMsg.value = errorCodes[error.code]
      })
  }

  const hasError = computed(() => {
    return errorMsg.value
  })

  return {
    login,
    hasError,
    errorMsg
  }
})