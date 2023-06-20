async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/stefanykupicki/portfolio/master/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}