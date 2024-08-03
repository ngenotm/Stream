import { create } from 'zustand';

const useUserStore = create(
    (set) => ({
        user: null,
        loading: false,
        error: null,
        fetchUser: async () => {
            set({ loading: true, error: null });
            try {
                const response = await fetch('/api/user'); // Replace with your API endpoint
                const data = await response.json();
                set({ user: data, loading: false });
            } catch (error) {
                set({ error: error.message, loading: false });
            }
        },
        clearUser: () => set({ user: null }),
    }
    ));

export default useUserStore;