import { createContext, useContext, type ReactNode } from "react";
import PostStore from "./store/postStore";
import UserStore from "./store/userStore";

interface AppContext {
    posts: PostStore;
    user: UserStore;
}

export const Context = createContext<AppContext | null>(null);

export const useAppContext = (): AppContext => {
    const ctx = useContext(Context);
    if (!ctx) throw new Error('Context error');
    return ctx;
}

const postStore = new PostStore();
const userStore = new UserStore();

const ContextProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Context.Provider value={{ posts: postStore, user: userStore }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;