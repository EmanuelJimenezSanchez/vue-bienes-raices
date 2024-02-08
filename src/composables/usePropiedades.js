import { computed, ref } from 'vue'
import { collection, doc, deleteDoc } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'

export default function usePropiedades() {

  const alberca = ref(false)

  const db = useFirestore()
  const propiedadesCollection = useCollection(collection(db, 'propiedades'))

  async function deleteItem(id) {
    if(confirm('¿Estás seguro de eliminar esta propiedad?') === false) return
    const docRef = doc(db, 'propiedades', id)
    await deleteDoc(docRef)
  }

  const propiedadesFiltradas = computed(() => {
    return alberca.value ?
      propiedadesCollection.value.filter(propiedad => propiedad.alberca) :
      propiedadesCollection.value
  })

  return {
    propiedadesCollection,
    propiedadesFiltradas,
    alberca,
    deleteItem
  }
}