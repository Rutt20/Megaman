const URL = 'http://localhost:4500/api/bosses';

export const getAllBosses = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

export const getBossById = async (id) => {
    const response = await fetch(URL+'/'+id);
    const data = await response.json();
    return data;
}

export const updateBossById = async (info) => {
    const response = await fetch(URL+'/'+info.id,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    });
    return response.status;
}


export const createNewBoss = async(info) => {
    const response = await fetch(URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(info)
    });
    return response;
}

export const deleteBossById = async (id) => {
    const response = await fetch(URL + '/' + id, {
        method: 'DELETE'
    });
    return response.status;
}