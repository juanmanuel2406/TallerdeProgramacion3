import { create } from 'zustand'

const useContadorStore = create((set) => ({
    contador: 0,
    incrementar: () => set((estado) => ({ contador: estado.contador + 1 })),
    decrementar: () => set((estado) => ({ contador: estado.contador - 1 })),
    resetear: () => set(() => ({ contador: 0 })),
    setContador: (valor) => set(() => ({ contador: valor }))
}))

export default useContadorStore