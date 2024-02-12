import { 
    getAllBosses,
    getBossById,
    updateBossById,
    createNewBoss, 
    deleteBossById 
} from "../service/bossesService";

import { 
    REQUEST,
    FAILURE,
    GET_BOSSES,
    GET_BOSS,
    UPDATE_BOSS,
    DELETE_BOSS,
    CREATE_BOSS
} from "../constants";


const fetchRequest = () => {
    return {
        type: REQUEST
    }
}

const fetchFailure = error => {
    return {
        type: FAILURE,
        payload: error
    }
}

const fetchBossesSuccess = bosses => {
    return {
        type: GET_BOSSES,
        payload: bosses
    }
}

const fetchBossSuccess = boss => {
    return {
        type: GET_BOSS,
        payload: boss
    }
}

const updateBossSuccess = item => {
    return {
        type: UPDATE_BOSS,
        payload: item
    }
}

const deleteBossSuccess = bosses => {
    return {
        type: DELETE_BOSS,
        payload: bosses
    }
}

const createBossSuccess = bosses => {
    return {
        type: CREATE_BOSS,
        payload: bosses
    }
}

export const fetchBosses = () => async dispatch => {
    dispatch(fetchRequest);
    try{
        const currentBosses = await getAllBosses();
        dispatch(fetchBossesSuccess(currentBosses));
    }catch(error) {
        dispatch(fetchFailure('Something Went Wrong'))
    }
};

export const fetchBoss = (id) => async dispatch => {
    dispatch(fetchRequest);
    try{
        const currentBoss = await getBossById(id);
        dispatch(fetchBossSuccess(currentBoss));
    }catch(error) {
        dispatch(fetchFailure('Something Went Wrong'));
    }
};

export const updateBoss = (item) => async dispatch => {
    dispatch(fetchRequest);
    const response = updateBossById(item);
    if(response == 204){
        dispatch(updateBossSuccess(item));
    } else {
        dispatch(fetchFailure('Something Went Wrong'));
    }
}

export const deleteBoss = (id) => async dispatch => {
    dispatch(fetchRequest);
    try{
        const response = await deleteBossById(id);
        if (response == 204){
            const currentBosses = await getAllBosses();
            dispatch(deleteBossSuccess(currentBosses));
        }
        else {
            dispatch(fetchFailure('Something Went Wrong'));
        }
    }catch(error) {
        dispatch(fetchFailure('Something Went Wrong'));
    }
}


export const createBoss = (item) => async dispatch => {
    dispatch(fetchRequest);
    try{
        const response = await createNewBoss(item);
        if(response.status == 201){
            const currentBosses = await getAllBosses();
            dispatch(createBossSuccess(currentBosses));
        } else {
            dispatch(fetchFailure('Something Went Wrong'));
        }
    } catch {
        dispatch(fetchFailure('Something Went Wrong'));
    }
    
}