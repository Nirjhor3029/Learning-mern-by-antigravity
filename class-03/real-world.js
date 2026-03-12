/**
 * CLASS 03: Real-World Use Cases (Professional Level)
 * Run this file in your terminal using:
 * node "d:\dev\Learning\MERN\class-03\real-world.js"
 */

// We use the 'node-fetch' API in newer Node.js versions. 
// For this script, we'll use an API provided by JSONPlaceholder.

// In modern Node (v18+), fetch is global. No need to require 'node-fetch'!
// We will assume Node 18+ and native fetch for our MERN stack.

// ==========================================
// 1. Fetching Data for React Component UI
// ==========================================
// A common pattern when a React component loads (e.g. useEffect)
// You need to fetch data, handle loading states, set data, catch errors.

const loadUsersForDashboard = async () => {
    // 1. Simulate setting React state: setIsLoading(true)
    console.log("[React UI] ⏳ Loading users... Showing Spinner.");

    try {
        // 2. The Network Request (API Call)
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // 3. Very important: Check if the response is actually OK (Status 200-299)
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        // 4. Parse the JSON body. This ALSO returns a Promise, so we must AWAIT it!
        const users = await response.json();

        // 5. Simulate setting React state: setUsers(users)
        console.log(`[React UI] ✅ Successfully loaded ${users.length} users!`);
        
        // Let's use Class 2 Map knowledge just for fun:
        const userNames = users.slice(0, 3).map(u => u.name);
        console.log("Top 3 Users:", userNames);

    } catch (error) {
        // 6. Simulate setting React state: setError(error.message)
        console.error("[React UI] ❌ Failed to load users:", error.message);
    } finally {
        // 7. Simulate setting React state: setIsLoading(false)
        console.log("[React UI] ⏸️ Stopped Spinner. UI Ready.\n");
    }
};

loadUsersForDashboard();


// ==========================================
// 2. Parallel API Calls (Promise.all)
// ==========================================
// In a real dashboard, you often need to fetch Users AND Orders AND Stats 
// before showing the page. If you `await` them one by one, it's slow!

const loadDashboardData = async () => {
    console.log("[Dashboard] ⏳ Fetching all data in parallel...");
    
    const startTime = Date.now();

    try {
        // We kick off both fetch requests at the EXACT SAME TIME!
        // We put them in an array inside Promise.all()
        const [usersRes, postsRes] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts")
        ]);

        if (!usersRes.ok || !postsRes.ok) throw new Error("One of the APIs failed.");

        // We also parse them in parallel
        const [users, posts] = await Promise.all([
            usersRes.json(),
            postsRes.json()
        ]);

        const timeTaken = Date.now() - startTime;
        console.log(`[Dashboard] ✅ Loaded ${users.length} users and ${posts.length} posts in ${timeTaken}ms!`);

    } catch (error) {
        console.error("[Dashboard] ❌ Error loading dashboard:", error.message);
    }
};

// Wait a bit before running the second example so the console output is cleaner
setTimeout(() => loadDashboardData(), 1500); 
