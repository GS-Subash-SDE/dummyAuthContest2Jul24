export  async function getData(usernameState, passwordState) {
    try {
      console.log(usernameState);
      console.log(passwordState);
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${usernameState}`,
        password: `${passwordState}`,
      }),
    });

      console.log(res);
    if (res.status !== 200) {
      throw new Error("Network issue happend!");
    }
    
    const data = await res.json();
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      return { status: 'success' };
    } catch (err) {
      alert(err.message);
      return { status: 'error' };
    }
  }

export async function getUserData(userId) {
  console.log(userId);
  try { 
  const res = await fetch(`https://dummyjson.com/users/${userId}`);
  
  if (!res.ok) {
    throw new Error("Network issue happend!");
    
  }

  const data = await res.json();
console.log('Profile',data);
    localStorage.setItem('user', JSON.stringify(data));
    return 'success';
  } catch (err) {
    alert('user Profile ', err.message);
    return 'error';
  }
}

