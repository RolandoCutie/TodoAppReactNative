import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { getDatabase, ref, onValue, set, push, update } from "firebase/database";
import { List } from "./components/TodoList";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDbBXljuynzoH18RdviEpyRndOFamPls3g",
    authDomain: "flutterfirebase-7cfe5.firebaseapp.com",
    databaseURL: "https://flutterfirebase-7cfe5-default-rtdb.firebaseio.com",
    projectId: "flutterfirebase-7cfe5",
    storageBucket: "flutterfirebase-7cfe5.firebasestorage.app",
    messagingSenderId: "324259221552",
    appId: "1:324259221552:web:73f6d1aa865fe1640d5df5",
    measurementId: "G-6E31QZQ1SM"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

const USER_ID_KEY = '@todo_app_user_id';

class Fire {
    userId: string | null = null;

    async init() {
        console.log("Starting Firebase initialization...");

        try {
            // Try to get stored user ID
            const storedUserId = await AsyncStorage.getItem(USER_ID_KEY);
            console.log("Stored user ID:", storedUserId);

            if (storedUserId) {
                this.userId = storedUserId;
                console.log("Using stored user ID:", this.userId);
                return;
            }

            // If no stored ID, create new anonymous user
            const userCredential = await signInAnonymously(auth);
            this.userId = userCredential.user.uid;

            // Store the new user ID
            await AsyncStorage.setItem(USER_ID_KEY, this.userId);
            console.log("New anonymous user created and stored:", this.userId);

        } catch (error) {
            console.error("Error in initialization:", error);
            throw error;
        }
    }

    getLists(callback: (lists: List[]) => void) {
        if (!this.userId) {
            console.log("No user ID available yet");
            callback([]);
            return;
        }

        console.log("Fetching lists for user:", this.userId);
        const listsRef = ref(database, `users/${this.userId}/lists`);

        onValue(listsRef, (snapshot) => {
            const lists: List[] = [];
            console.log("Received data from Firebase:", snapshot.val());

            if (snapshot.exists()) {
                snapshot.forEach((child) => {
                    const listData = child.val();
                    lists.push({
                        id: parseInt(child.key!) || Date.now(),
                        name: listData.name || "",
                        color: listData.color || "#000000",
                        todos: listData.todos || []
                    });
                });
                console.log("Processed lists:", lists);
            } else {
                console.log("No data available in snapshot");
            }

            callback(lists);
        }, (error) => {
            console.error("Error fetching lists:", error);
            callback([]);
        });
    }

    async addList(list: List) {
        if (!this.userId) {
            console.log("No user ID available");
            return;
        }

        const listsRef = ref(database, `users/${this.userId}/lists`);
        const newList = {
            name: list.name,
            color: list.color,
            todos: list.todos || []
        };

        console.log("Adding list to Firebase:", newList);
        const newListRef = await push(listsRef, newList);
        console.log("List added successfully with key:", newListRef.key);
        return newListRef.key;
    }

    async updateList(list: List) {
        if (!this.userId) {
            console.log("No user ID available");
            return;
        }

        const listRef = ref(database, `users/${this.userId}/lists/${list.id}`);
        const updateData = {
            name: list.name,
            color: list.color,
            todos: list.todos || []
        };

        console.log("Updating list in Firebase:", updateData);
        await update(listRef, updateData);
        console.log("List updated successfully");
    }
}

export const fireInstance = new Fire();
export default firebaseApp;
