export async function getData() {
    const res = await fetch('https://api.mudoapi.tech/menus', {
        cache: 'no-cache'
    });

    // if (!res.ok) {
    //   Handle error if needed
    // }

    return res.json();
    }
