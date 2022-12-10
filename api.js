export async  function fetchData(url, options={}){
    const headers = {Accept: 'application/json',...options.headers}
    const r = await fetch(url,{...options, headers});
    if(r.ok == true){
        return r.json()
    }throw new Error('impossible de contacter le serveur')
}
