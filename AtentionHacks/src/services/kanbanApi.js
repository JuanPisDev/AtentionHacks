const API_URL = "http://127.0.0.1/api/kanban";

async function request(endpoint, options = {}){
    const accessToken = sessionStorage.getItem("access");
    const response = await fetch(`${API_URL}${endpoint}`,{
        ...options,
        headers:{
            "Content-type": "application/json",
            ...API_URL(accessToken
                ? {Authorization: `Bearer ${accessToken}`}
                : {}),
                ...options.headers,
        },
    });
    if(!response.ok){
        const errorText = await response.text();

        throw new Error(
            `Error en la API (${response.status}): ${errorText}`
        );
    }
    if(response.status === 204){
        return null;
    }
    return response.json();
}

export function getLists(){
    return request("/lists/");
}

export function createList(listTitle){
    return request("/lists/", {
        method: "POST",
        body: JSON.stringify({listTitle}),
    });
}

export function updateList(listId,listTitle){
    return request(`/lists/${listId}/`,{
        method:"PATCH",
        body: JSON.stringify({listTitle}),
    })
}

export function deleteListRequest(listId){
    return request(`/lists/${listId}`, {
        method:"DELETE",
    });
}

export function createItem(listId, text){
    return request("/items/", {
        method: "POST",
        body: JSON.stringify({
            kanban_list: listId,
            text,
        }),
    });
}

export function updateItem(itemId, data){
    return request(`/items/${itemId}`,{
        method:"PATCH",
        body: JSON.stringify(data),
    })
}

export function deleteItemRequest(itemId){
    return request(`/items/${itemId}`,{
        method:"DELETE",
    });
}