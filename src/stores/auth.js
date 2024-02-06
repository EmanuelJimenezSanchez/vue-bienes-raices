import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {

  const auth = useFirebaseAuth()
  const authUser = ref(null)
  const router = useRouter()

  const errorMsg = ref('')
  const errorCodes = {
    'auth/invalid-email': 'El email es inválido',
    'auth/user-disabled': 'El usuario ha sido deshabilitado',
    'auth/user-not-found': 'Usuario no encontrado',
    'auth/invalid-credential': 'Usuario o contraseña incorrectos',
    'auth/wrong-password': 'El password es incorrecto',
    'auth/too-many-requests': 'Demasiados intentos, intente más tarde'
  }

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        authUser.value = user
      }
    })
  })

  const login = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        errorMsg.value = ''
        authUser.value = userCredential.user

        router.push({ name: 'admin-propiedades' })

      })
      .catch((error) => {
        errorMsg.value = errorCodes[error.code]
      })
  }

  const logout = () => {
    signOut(auth).then(() => {
      authUser.value = null
      router.push({ name: 'login' })
    }).catch((error) => {
      console.error(error)
    })
  }

  const hasError = computed(() => {
    return errorMsg.value
  })

  const isAuth = computed(() => {
    return authUser.value
  })

  return {
    login,
    logout,
    hasError,
    errorMsg,
    isAuth
  }
})