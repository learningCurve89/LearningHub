function get(url){
    await fetch(url)
            .then(res => res.json())
}